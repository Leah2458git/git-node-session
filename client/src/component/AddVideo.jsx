import React, { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { RadioButton } from "primereact/radiobutton";
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
// import { useAddLessonMutation } from './lessonsApiSlice';
import { Divider } from 'primereact/divider';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateLessonVideoMutation ,useGetAllVideosQuery} from '../app/videoApiSlice';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputSwitch } from 'primereact/inputswitch';
import { FileUpload } from 'primereact/fileupload';
import axios from 'axios'
const AddVideo = () => {

    const { idLess } = useParams();
    const [selectedFile, setSelectedFile] = useState(null);
    const [video, setVideo] = useState(null);

    const toast = useRef(null);
    const navigate = useNavigate()

    const [addVideo, { isError, isSuccess, error }] = useCreateLessonVideoMutation()
//    const [{ data,isError, isSuccess, error}] = useGetAllVideosQuery()
    // const handleAdd = (e) => {
    //     console.log(e);
    //     addLesson({})
    //     claer()
    // }
    // const handleFileChange = (event) => {

    //     setSelectedFile(event.target.files);
    // useEffect(() => {
    //     if (isSuccess) {
    //         // refetch()
    //     }
    // }, [isSuccess])
    //   };
    // const getVideo = async () => {
        
    //     await axios.post("http://localhost:1260/upload", { fileName: "1710339216345-59-aaaa.mp4" }).then((res) => {console.log(res.data);setVideo(res.data)})//לא מצליח ליבא כלום
    // }
    // useEffect(() => {
    //     if (isSuccessAdd) {
    //         getVideo()
    //     }
    // }, [isSuccessAdd] )
    const handleFileChange = (event) => {

        setSelectedFile(event.target.files[0]);
    };
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };
    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
    const defaultValues = {
        role: '',
        name: '',
        path: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {

        const formData = new FormData();

        formData.append('name', "aaaaaaaa" + Math.round(Math.random() * 100));
        formData.append('role', "refresh");
        formData.append('path', selectedFile);
        console.log(selectedFile);
        console.log("formData");
        for (const value of formData.values()) {
            console.log(value);
        }

        const handleFileChange = (event) => {

            setSelectedFile(event.target.files[0]);
        };

        // Send the file to your Node.js server using axios
        addVideo(formData)
        // data=new FormData()


        // data.level && show();
        // console.log({ word: data.word, translating: data.translating, Img: data.Img, lesson: idLess });
        // addWord({ word: data.word, translating: data.translating, Img: data.Img, lesson: idLess })
        reset();
        // navigate('/VideoList')
    };
    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
                <div className="flex flex-column  gap-3  flex-row  gap-2" >
                    <Toast ref={toast} />
                    
                 <Controller
                        name="Video"
                        type='file'
                        control={control}
                        render={({ field, fieldState }) => (
                            <>
                                <div></div><div></div>
                                <input type="file" name="path" onChange={handleFileChange} accept='image/*,audio/*,gif/*,video/mp4,video/x-m4v,video/*' />
                                {video &&<video width="640" height="360" controls>
                                    <source src={video} type="video/mp4" />
                            
                                </video> }
                                {isError && console.log("error")}
                                {isSuccess && console.log("isSuccess")}
                                
                            </>
                        )}
                    />
                    {/* <form enctype="multipart/form-data"> */}
                    {/* <input type='file' name='Img' /> */}
                    {/* </form> */}

                    {/* <Toast ref={toast} /> */}


                    <Button label="Add Video" type="submit" />
                    {video +" "}
                </div>
            </form>
        </>
    )
}
export default AddVideo
