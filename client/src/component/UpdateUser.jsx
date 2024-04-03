
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import { useUpdateUserMutation } from '../app/userApiSlice';
import { Dropdown } from 'primereact/dropdown';
import { useLocation, useNavigate, useParams } from "react-router-dom";


export default function UpdateUser() {
    const [visible, setVisible] = useState(true);
    const location = useLocation()

    const user  = location.state.user
    
    const [updateUser, { isError, isSuccess, error }] = useUpdateUserMutation()
    const navigate = useNavigate()
    const onclickCancal=()=>{
        setVisible(false)
        navigate('/ShowAllUsers')
    }
    const onclickupdate = () => {
        setVisible(false)
        const userName = document.getElementById("username").value
        const name = document.getElementById("name").value
        const password = document.getElementById("password").value
        const email = document.getElementById("email").value
        const phone = document.getElementById("phone").value
        const roles = selectedRole.code || selectedRole
        console.log(roles);
        const obj={id:user._id,user:{userName: userName, name: name, password: password, email: email, phone: phone, roles: roles }}
        updateUser(obj)
        navigate('/ShowAllUsers')
    }


    const [selectedRole, setSelectedRole] = useState(user.roles);
    const roles = [
        { name: 'מנהל', code: 'admin' },
        { name: 'מזכירה', code: 'secretary' },
        { name: 'רענון', code: 'refresh' },
        { name: 'זינוק', code: 'leap' },
        { name: 'וארשתיך', code: 'engaged' }
    ];

    return (
        <div className="card flex justify-content-center" >
            {/* <Button label="הוסף משתמש" onClick={() => setVisible(true)} style={{ marginTop: "50px", width: '150px', height: '50px', borderRadius: '10px', marginRight: '5%', backgroundColor: 'black', color: '#bd8e17' }} /> */}
            <Dialog
                visible={visible}
                style={{ direction: 'rtl' }}
                modal
                onHide={() => {
                    setVisible(false)
                }}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" >
                        <span >הוספת משתמש</span>
                        <div className="inline-flex flex-column gap-2" >
                            <label htmlFor="username" className="text-primary-50 font-semibold" >
                                שם משתמש
                            </label>
                            <InputText id="username" label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50" defaultValue={user.userName}></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2" >
                            <label htmlFor="name" className="text-primary-50 font-semibold" >
                                שם
                            </label>
                            <InputText id="name" label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50" defaultValue={user.name}></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2" >
                            <label htmlFor="username" className="text-primary-50 font-semibold" >
                                סיסמה
                            </label>
                            <InputText id="password" label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="password" defaultValue={user.password}/>
                            <div />
                            <div></div>
                            <label htmlFor="email" className="text-primary-50 font-semibold">
                                מייל
                            </label>
                            <InputText id="email" label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="email" defaultValue={user.email}></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2" >
                            <label htmlFor="phone" className="text-primary-50 font-semibold">
                                טלפון
                            </label>
                            <InputText id="phone" label="phone" className="bg-white-alpha-20 border-none p-3 text-primary-50" defaultValue={user.phone}></InputText>
                        </div>
                        <div className="card flex justify-content-center" >
                            <Dropdown value={selectedRole} onChange={(e) => setSelectedRole(e.value)} options={roles} optionLabel="name"
                                placeholder={selectedRole} className="w-full md:w-14rem" />
                        </div>

                        <div className="flex align-items-center gap-2" >
                            <Button label="עדכון" onClick={(e) => onclickupdate()} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10" ></Button>
                            <Button label="ביטול" onClick={(e) =>onclickCancal()} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10" ></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
    )
}
