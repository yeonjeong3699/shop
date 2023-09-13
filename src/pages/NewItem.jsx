import React, { useState } from "react";
import { upLoadImage } from '../api/imgUpload';
import { addProduct } from "../api/firebase";
import { styled } from "styled-components";

export default function NewItem() {

    //모든 상품의 상태를 빈 문자열로 초기화 하는 값
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        option: '',
        category: ''
    });

    //업로드 된 파일 초기화
    const [file, setFile] = useState(null);

    //업로드 상태 초기화(업로드 시 true)
    const [isLoading, setIsLoading] = useState(false);

    //업로드 완료 시 상태 초기화
    const [success, setSuccess] = useState(null);

    //모든 파일의 상태 업데이트. 업로드X
    const onChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'file' && files && files[0]) {
            console.log(files[0])
            setFile(files[0])
        } else {
            setProduct((prevProduct) => ({ ...prevProduct, [name]: value }))
        }
    }

    //업데이트 한 파일을 업로드
    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try { //시도
            const url = await upLoadImage(file);
            await addProduct(product, url); //파이어베이스 데이터 연동 스크립트 실행

            setSuccess('이미지가 업로드 되었습니다.') //성공 시 텍스트 출력

            setTimeout(() => {
                setSuccess(null);
            }, 3000)

            setProduct({
                title: '',
                price: '',
                description: '',
                option: '',
                category: ''
            });

            setFile(null);
        } catch (error) { //오류가 있을 경우 콘솔에 표시
            console.error(error);
        } finally { //모든 작업이 완료되었을 경우
            setIsLoading(false);
        }
    }


    return (
        <>
            <div className="container">
                <FormContainer>
                    {success && <p>{success}</p>}

                    <div className="imgWrap">
                        {file && (<img src={URL.createObjectURL(file)} alt='제품 이미지' />)}
                    </div>

                    <form onSubmit={onSubmit}>
                        <input type='file' name='file' accept="img/*" onChange={onChange} />
                        <input type='text' name='category' placeholder='카테고리' value={product.category} onChange={onChange} />
                        {/* <select name="category" onChange={onChange}>
                            <option value=''>카테고리</option>
                            <option value={product.category}>이동가방</option>
                            <option value={product.category}>하네스</option>
                            <option value={product.category}>옷</option>
                            <option value={product.category}>방석</option>
                            <option value={product.category}>장난감</option>
                            <option value={product.category}>사료</option>
                        </select> */}
                        <input type='text' name='title' placeholder='제목' value={product.title} onChange={onChange} />
                        <input type='text' name='price' placeholder='가격' value={product.price} onChange={onChange} />
                        <input type='text' name='description' placeholder='설명' value={product.description} onChange={onChange} />
                        <input type='text' name='option' placeholder='옵션' value={product.option} onChange={onChange} />

                        <button disabled={isLoading}>
                            {isLoading ? '업로드 중' : '제품 등록하기'}
                        </button>
                    </form>
                </FormContainer>
            </div>
        </>
    )
}

const FormContainer = styled.div`
    max-width: 1280px;
    padding: 30px 0px;
    margin: 0px auto;
    display: flex;
    gap: 36px;
    .imgWrap{
        max-width: 500px;
        height: 500px;
        img{
            height: 100%;
            display: block;
        }
    }
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        input{
            width: 100%;
            box-sizing: border-box;
            height: 36px;
        }
        button{
            color: white;
            background-color: #285430;
            border: none;
            border-radius: 5px;
            padding: 12px 0px;
            margin-top: 30px;
            cursor: pointer;
        }
    }
`