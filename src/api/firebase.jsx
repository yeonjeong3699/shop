import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

//데이터베이스에 있는 파이어베이스의 정보를 가져오는 훅
import { get, getDatabase, ref, set, remove } from "firebase/database";
import { v4 as uuid } from 'uuid' //uuid: 고유 식별자를 생성해주는 패키지

//파이어베이스 스토리지에서 파일 다운받기
import { getStorage, ref as storageRef, getDownloadURL } from "firebase/storage"; //ref as storageRef : database에서 가져오는 ref와 충돌하기 때문에 이름 변경

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_STORAGE_MESSAGINGSENDERID
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); //매개변수에 app추가
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
const storage = getStorage(app); //추가

export { storage };
export { auth };


//자동 로그인 방지
provider.setCustomParameters({ //setCustomParameters : 사용자가 특정 로그인 시스템을 이용할 때 로그인 인증 메서드.
    prompt: 'select_account' //prompt : prompt를 매개변수로 해서 로그인 할 때 마다 'select_account'라는 옵션으로 로그인 창을 새로 띄운다.
})


//로그인 정보 받아오기 영역
export async function login() {
    return signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            return user;
        }).catch(console.error);
}

export async function logout() {
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch(console.error)
}


//사용자의 정보를 받아올 함수
export function userState(callback) {
    onAuthStateChanged(auth, async (user) => {
        const userUpdate = user ? await adminUser(user) : user;
        callback(userUpdate);
    })
}

async function adminUser(user) {
    try {
        const adminState = await get(ref(database, 'admin')); //adminState : database 주소에 있는 database 중에서 admin 값을 가져온다(get)
        if (adminState.exists()) { //adminState.exists : adminState에서 가져온 database 쿼리에서 얻는 객체
            const admins = adminState.val();
            const isAdmin = admins.includes(user.email);
            //isAdmin : user에서 받아온 email 주소가 database에서 받아온 admin의 정보가 포함되는지(includes) 묻는 구문.
            //포함되어 있으면 true, 포함되어 있지 않으면 false
            return { ...user, isAdmin }; //user의 배열에 isAdmin 값을 추가해서 새로 배열을 반환.
        }
        return user;
    } catch (error) {
        console.error(error) //오류가 생겼을 경우 콘솔에 오류 표시
        throw error //오류를 다시 발생시켜 오류를 포착할 수 있게 함. (없어도 상관은 없음)
    }
}


//파이어베이스에 상품 정보 연동하기
export async function addProduct(product, image) {
    const id = uuid();
    return set(ref(database, `products/${id}`), {
        ...product,
        id,
        price: parseInt(product.price),
        image,
        option: product.option.split(',').map(option => option.trim())
    })
}

//파이어베이스 database에 있는 정보 가져오기
export async function getProducts() {
    return get(ref(database, 'products')).then((snapshot) => { //snapshot: 렌더링
        if (snapshot.exists()) {
            return Object.values(snapshot.val())
        }
        return []
    })
}

//카테고리 불러오기
export async function getCategory() {
    const database = getDatabase();
    const categoryRef = ref(database, 'products');
    try {
        const snapshot = await get(categoryRef);
        if (snapshot.exists()) {
            return Object.values(snapshot.val());
        }
        return []
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//카테고리 필터
export async function getCategoryProduct(category) {
    return get(ref(database, 'products')).then((snapshot) => {
        if (snapshot.exists()) {
            const allProduct = Object.values(snapshot.val());
            const filterProduct = allProduct.filter((product) => (product.category === category))
            return filterProduct
        }
        return [];
    })
}

//storage 이미지 불러오기
export async function loadSlideImage(imgPath) {
    const storage = getStorage();

    try {
        const imgRef = storageRef(storage, imgPath);
        const downloadURL = await getDownloadURL(imgRef);

        return downloadURL;
    } catch (error) {
        console.error(error);
    }
}

//카트 리스트 추가
export async function getCart(userId) { //로그인한 계정의 카트 정보를 받아옴
    return get(ref(database, `cart/${userId}`))
        .then((snapshot) => {
            const item = snapshot.val()
            console.log(item)
            return Object.values(item);

        })
}

export async function updateCart(userId, product) {
    try {
        const cartRef = ref(database, `cart/${userId}/${product.id}`);
        console.log(product.id)
        await set(cartRef, product);
    } catch (error) {
        console.error(error);
    }
}

//카트 리스트 삭제
export async function deleteItemCart(userId, productId) {
    return remove(ref(database, `cart/${userId}/${productId}`))
}

//검색창
export async function searchProducts(query) {
    try {
        const dbRef = ref(database, 'products');
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            const allProduct = Object.values(data);

            if (allProduct.length === 0) {
                return [];
            }

            const matchItems = allProduct.filter((product) => {
                const itemTitle = product.title.toLowerCase() //toLowerCase: 받아온 문자열을 모두 소문자로 변환
                return itemTitle.includes(query.toLowerCase());
            })

            return matchItems;
        }else{
            return [];
        }
    } catch (error) {
        console.error(error);
    }
}