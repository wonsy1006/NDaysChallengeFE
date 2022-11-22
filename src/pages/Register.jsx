import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import SignUpForm from '../components/features/signup/SignUpForm';
import Button from '../components/common/Button';
import Pic1 from '../assets/images/profile_pics/pic1.svg';
import Pic2 from '../assets/images/profile_pics/pic2.svg';
import Pic3 from '../assets/images/profile_pics/pic3.svg';
import Pic4 from '../assets/images/profile_pics/pic4.svg';
import Pic5 from '../assets/images/profile_pics/pic5.svg';
import Pic6 from '../assets/images/profile_pics/pic6.svg';

const Register = () => {
  return (
    <>
      <h2>회원가입</h2>
      <SignUpForm />
    </>
  );
};

export default Register;
