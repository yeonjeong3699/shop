import { async } from "@firebase/util";
import React, { useState } from "react";
import { styled } from 'styled-components';
import { imgUpload } from "../api/imgUpload";


export default function NewItem() {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
        size: '',
    });

    const [file, setFile] = useState();

    const [isUpload, setIsUpload] = useState(false);

    const [success, setSuccess] = useState('');


    //선택한 파일의 이미지 불러오기
    const onChange = (e) => {
        setFile(e.target.files[0])
    }

    const onSubmit = async(e) => {
        e.preventDefalt();
        imgUpload(file).then((url)=>{
            imgUpload(file)
            console.log(url)
        })

    }


    return (
        <NewItemForm>
            <form onSubmit={onSubmit}>
                <input type="file" name="file" accept="images/" required onChange={onChange} />
                {file && (
                    <img src={URL.createObjectURL(file)} /> //선택한 파일의 이미지 불러오기
                )}

                {/*

                {['title', 'price', 'category', 'description', 'size'].map((field)=>(
                    <input key={field} type="text" name="" />
                ))}

                */}

                <button>업로드</button>

            </form>
        </NewItemForm>
    )
}

const NewItemForm = styled.div`
    
`