import React, { useRef, useState } from 'react'
import axiosInstance from '../Helpers/AxiosInstance'


const RegisterForm = () => {
    let panRef=useRef()
    let passRef=useRef()
    let emailRef=useRef()
    let [reg,setReg]=useState("individual");
    let [data,setData]=useState({
        "MemberID": "",
        "LoginName": "B1122334455",
        "LoginPwd": "",
        "Title": "Mr",
        "MemberName": "",
        "FatherTitle": "",
        "FatherName": "",
        "BirthDate": "",
        "Gender": "M",
        "MaritalStatus": "U",
        "MemberAddress": "",
        "MemberStateID": 12,
        "MemberDistrictID": 189,
        "MemberCityName": "Ahmedabad",
        "MemberPinCode": "",
        "MobileNo": "",
        "EmailID": "",
        "MemberPANNo": "",
        "MemberBankID": 0,
        "MemberBankBranch": "",
        "MemberBankACNo": "",
        "MemberBankACType": "",
        "MemberBankIFSCCode": "",
        "NomineeName": "",
        "NomineeRelation": "",
        "SponsorID": 16303,
        "GroupID": 16303,
        "GroupPosition": "L",
        "CommandID": null,
        "CreateBy": 0,
        "CreateDate": null,
        "CreateIP": null,
        "UpdateBy": 0,
        "UpdateDate": null,
        "UpdateIP": null,
        "RegType": "I",
        "ProfilePhoto": "",
        "MemberAadharNo": "",
        "MemberCode": "",
        "GroupCode": "B1849835915",
        "SponsorCode": "B1849835915",
        "ConfirmPass": "Munjal@123",
        "IsActive": true,
        "IsPaid": null,
        "date": 10,
        "month": 5,
        "year": 1984,
        "TermNCondition": null
    })
    let {Title,MemberName,FatherTitle,FatherName,BirthDate,MemberAddress,MemberPinCode,MobileNo,EmailID,
        MemberPANNo,MemberAadharNo,NomineeName,NomineeRelation,LoginPwd}=data

    let handleData=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    function validatePAN(panNumber) {
        var panPattern = /^[A-Z]{3}P[A-Z]\d{4}[A-Z]$/;
        return panNumber.length <= 10 && panPattern.test(panNumber);
      }
      function validatePassword(password) {
        var passwordPattern = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,15}$/;
        return password.length <= 15 && passwordPattern.test(password);
      }
      function validateEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
      }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        let val=panRef.current.value
        let pass=passRef.current.value
        let email=emailRef.current.value
       if( validatePAN(val) && validatePassword(pass) && validateEmail(email))
       {
               let resp= await axiosInstance.post("/api/memberapi/",data);
               console.log(resp)
       }
       else{
        alert("ENTER PROPER CREDENTIALS")
       }
    }
  return (
    <div className='main'>
        <h1>REGISTRATION FORM</h1>
        <div>
            <p>REGISTRATION TYPE : </p>
            <select name="reg" id="" onChange={(e)=>{
                setReg(e.target.value)
            }}>
                <option value="individual">INDIVIDUAL</option>
                <option value="organization">ORGANIZATION</option>
            </select>
        </div>
        <br />
        <br />
        {reg==="individual"?<h1>INDIVIDUAL REGISTRATION</h1>:<h1>ORGANIZATION REGISTRATION</h1>}
        <form action="" onSubmit={handleSubmit}>
            <div>
                <select name="Title" id=""  value={Title} onChange={handleData}>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                </select>
                <input type="text" name="MemberName" value={MemberName} id="" max={60} placeholder='ENTER NAME' onChange={handleData}/>
            </div>
            <div>
                <select name="FatherTitle" value={FatherTitle} onChange={handleData} id="">
                    <option value="">S/O</option>
                    <option value="">D/0</option>
                    <option value="">W/O</option>
                </select>
                <input type="text" name="FatherName" value={FatherName} id="" max={60} placeholder='ENTER FATHER NAME' onChange={handleData}/>
            </div>
            <div>
                <label htmlFor="">DOB :</label>
                <input type="date" name="BirthDate" value={BirthDate} onChange={handleData} id="" />
            </div>
            <div>
                <label htmlFor="">address</label>
                <textarea name="MemberAddress" value={MemberAddress} onChange={handleData} id="" cols="30" rows="10" maxLength={250}></textarea>
            </div>
            <div>
                <label htmlFor="">PINCODE</label>
                <input type="number" name="MemberPinCode" value={MemberPinCode} onChange={handleData} id="" maxLength={10} />
            </div>
            <div>
                <label htmlFor="">MOBILE</label>
                <input type="text" name="MobileNo" value={MobileNo} onChange={handleData} id="" maxLength={10} />
            </div>
            <div>
                <label htmlFor="">EMAIL</label>
                <input ref={emailRef} type="text" name="EmailID" value={EmailID} onChange={handleData} id="" maxLength={100} />
            </div>
            <div>
                <label htmlFor="">PAN NUMBER</label>
                <input ref={panRef} type="text" name="MemberPANNo" value={MemberPANNo} onChange={handleData} id="" maxLength={10} />
            </div>
            <div>
                <label htmlFor="">AADHAR NUMBER</label>
                <input type="text" name="MemberAadharNo" value={MemberAadharNo} onChange={handleData} id="" maxLength={12} />
            </div>
            <div>
                <label htmlFor="">NOMINEE NAME</label>
                <input type="text" name="NomineeName" value={NomineeName} onChange={handleData} id="" maxLength={50} />
            </div>
            <div>
                <label htmlFor="">NOMINEE RELATION</label>
                <input type="text" name="NomineeRelation" value={NomineeRelation} onChange={handleData} id="" maxLength={50} />
            </div>
            <div>
                <label htmlFor="">PASSWORD</label>
                <input ref={passRef} type="text" name="LoginPwd" value={LoginPwd} onChange={handleData} id="" maxLength={15} />
            </div>
            <div>
                <button>REGISTER</button>
            </div>

        </form>
    </div>
  )
}

export default RegisterForm
