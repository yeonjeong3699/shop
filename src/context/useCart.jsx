import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteItemCart, getCart, updateCart } from "../api/firebase";
import { useAuthContext } from "./AuthConFirm"

export default function useCart() {
    const { uid } = useAuthContext();
    const queryClient = useQueryClient();

    const cartInfor = useQuery(['cart', uid || ''], () => getCart(uid), {
        enabled: !!uid

    })
    console.log(cartInfor)

    const addItemCart = useMutation( //mutate로 전달한 값 받아오기
        (product) => updateCart(uid, product), {
        onSuccess: () => {
            queryClient.invalidateQueries(['cart', uid])
        }
    }
    )

    const deleteItem = useMutation((id) => deleteItemCart(uid, id), {
        onSuccess: () => {
            queryClient.invalidateQueries(['cart', uid])
        }
    })

    return { cartInfor, addItemCart, deleteItem }
}