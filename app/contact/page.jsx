"use client";

//tool ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

//icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

//info data
import { infor } from "@/lib/enums";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [services, setServices] = useState('')
  const [message, setMessage] = useState('')

  //insert
  const [isInsertFirstName, setInsertFirstName] = useState({ isValid: true, errorMassage: '' })
  const [isInsertLastName, setInsertLastName] = useState({ isValid: true, errorMassage: '' })
  const [isInsertPhoneNumber, setInsertPhoneNumber] = useState({ isValid: true, errorMassage: '' })
  const [isInsertEmail, setInsertEmail] = useState({ isValid: true, errorMassage: '' })
  const [isInsertMessage, setInsertMessage] = useState({ isValid: true, errorMassage: '' })

  const [selectServices, setSelectServices] = useState({ isValid: true, errorMassage: '' })

  //Valid Email and Phone number
  const [validEmail, setValidEmail] = useState({ isValid: true, errorMassage: '' })
  const [validPhoneNumber, setValidPhoneNumber] = useState({ isValid: true, errorMassage: '' })

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== "") {
      if (!emailRegex.test(email)) {
        setValidEmail({ isValid: false, errorMassage: 'Please enter a valid email address.' })
      } else {
        setValidEmail({ isValid: true, errorMassage: '' })
      }
      setInsertEmail({ isValid: true, errorMassage: '' })
    }
  }, [email])

  useEffect(() => {
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneNumber !== "") {
      if (!phoneRegex.test(phoneNumber)) {
        setValidPhoneNumber({ isValid: false, errorMassage: 'Phone number is valid.' })
      } else {
        setValidPhoneNumber({ isValid: true, errorMassage: '' })
      }
      setInsertPhoneNumber({ isValid: true, errorMassage: '' })
    }
  }, [phoneNumber])

  useEffect(() => {
    if (firstName != "") setInsertFirstName({ isValid: true, errorMassage: '' })
    if (lastName != "") setInsertLastName({ isValid: true, errorMassage: '' })
    if (email != "") setInsertEmail({ isValid: true, errorMassage: '' })
    if (phoneNumber != "") setInsertPhoneNumber({ isValid: true, errorMassage: '' })
    if (message != "") setInsertMessage({ isValid: true, errorMassage: '' })
    if (services != "") setSelectServices({ isValid: true, errorMassage: '' })
  }, [firstName, lastName, email, phoneNumber, message, services])

  const handleSummit = async () => {
    if (firstName != '' && lastName != '' && phoneNumber != '' && email != '' && message != '' && services != '') {
      if ((validEmail.isValid) && (validPhoneNumber.isValid)) {
        console.log("submit")
        const data = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          services: services,
          message: message,
        }
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/contacts`, data)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
    else {
      if (firstName == '') {
        setInsertFirstName({ isValid: false, errorMassage: 'Please enter your firstname.' })
      } if (lastName == '') {
        setInsertLastName({ isValid: false, errorMassage: 'Please enter your lastname.' })
      } if (phoneNumber == '') {
        setInsertPhoneNumber({ isValid: false, errorMassage: 'Please enter your phone number.' })
      } if (email == '') {
        setInsertEmail({ isValid: false, errorMassage: 'Please enter your email address.' })
      } if (message == '') {
        setInsertMessage({ isValid: false, errorMassage: 'Please enter your massage.' })
      } if (services == '') {
        setSelectServices({ isValid: false, errorMassage: 'Please select a services.' })
      }
    }
  }

  // console.log(' isInsertEmail.isValid', isInsertEmail.isValid)
  // console.log(' isInsertEmail.isValid', validEmail.isValid)

  // console.log('firstname', isInsertFirstName.isValid)
  // console.log('lastname', isInsertLastName.isValid)
  // console.log('email', isInsertEmail.isValid)
  // console.log('phone', isInsertPhoneNumber.isValid)
  // console.log('massage', isInsertMassage.isValid)
  console.log('validPhoneNumber', validPhoneNumber.isValid)
  console.log('validEmail', validEmail.isValid)
  // console.log("service", services)
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        }
      }} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let'go work together</h3>
              <p className="text-white/60">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem aperiam eligendi harum sit veritatis, facere a nihil.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <Input type="firstname" placeholder="Firstname" />
                <Input type="lasttname" placeholder="lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="tel" placeholder="Phone number" pattern="[0-9]{10}"/> */}
                <div className="col-span-1 relative">
                  <div className=" absolute -top-5 left-0">
                    {!isInsertFirstName.isValid && <p className="text-[10px] text-red-500 ">{isInsertFirstName.errorMassage}</p>}
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Firstname"
                    className={`flex h-[32px] w-full rounded-md border ${isInsertFirstName.isValid ? 'border-white/10' : 'border-red-500'} focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none`}
                  />
                </div>
                <div className="col-span-1 relative">
                  <div className=" absolute -top-5 left-0">
                    {!isInsertLastName.isValid && <p className="text-[10px] text-red-500 ">{isInsertLastName.errorMassage}</p>}
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Lastname"
                    className={`flex h-[32px] w-full rounded-md border ${isInsertLastName.isValid ? 'border-white/10' : 'border-red-500'} focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none`}
                  />
                </div>

                <div className="col-span-1 relative">
                  <div className=" absolute -top-5 left-0">
                    {!isInsertEmail.isValid ? <p className="text-[10px] text-red-500">{isInsertEmail.errorMassage}</p> :
                      <>
                        {!validEmail.isValid && <p className="text-[10px] text-red-500 ">{validEmail.errorMassage}</p>}
                      </>
                    }
                  </div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className={`flex h-[32px] w-full rounded-md border ${(isInsertEmail.isValid && validEmail.isValid) ? 'border-white/10' : 'border-red-500'}   focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none`}
                  />
                </div>
                <div className="col-span-1 relative">
                  <div className="absolute -top-5 left-0">
                    {!isInsertPhoneNumber.isValid ? <p className="text-[10px] text-red-500">{isInsertPhoneNumber.errorMassage}</p> :
                      <>
                        {!validPhoneNumber.isValid && <p className="text-[10px] text-red-500">{validPhoneNumber.errorMassage}</p>}
                      </>
                    }
                  </div>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone number"
                    className={`flex h-[32px] w-full rounded-md border ${(isInsertPhoneNumber.isValid && validPhoneNumber.isValid) ? `border-white/10` : `border-red-500`} focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none`}
                  />
                </div>
              </div>
              {/* select */}
              <div className="col-span-2 relative">
                <div className="absolute -top-5 left-0">
                  {!selectServices.isValid && <p className="text-[10px] text-red-500">{selectServices.errorMassage}</p>}
                </div>
                <Select value={services} onValueChange={setServices}>
                  <SelectTrigger className={`w-full ${selectServices.isValid ? `border-white/10` : `border-red-500`}`}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectGroup >
                      <SelectLabel >Select a service</SelectLabel>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="UX/UI Design">UX/UI Design</SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-1 relative">
                <div className="absolute -top-5 left-0">
                  {!isInsertMessage.isValid && <p className="text-[10px] text-red-500">{isInsertMessage.errorMassage}</p>}
                </div>
                <textarea
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your massage here. (TH or ENG)"
                  className={`flex h-[200px] w-full rounded-md border ${isInsertMessage.isValid ? `border-white/10` : `border-red-500`}  focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none`}
                />
              </div>
              <button
                type="submit"
                size="md"
                className="max-w-40 bg-accent text-primary font-bold rounded-3xl p-1 hover:bg-accent-hover" onClick={handleSummit}>Send massage</button>
            </div>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {infor.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center gap-6  ">
                      <div className="text-[28px]">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">
                        {item.title}
                      </p>
                      <h3 className="text-lg">
                        {item.description}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact