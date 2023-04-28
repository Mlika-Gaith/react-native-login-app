import React from 'react';
import CustomButton from '../CustomButton';
const SocialSignInButtons = () => {
  const onSignInWithFacebook = () => {};
  const onSignInWithGoogle = () => {};
  const onSignInWithApple = () => {};
  return (
    <>
      <CustomButton
        onPress={onSignInWithFacebook}
        text={'Sign In with Facebook'}
        type="TERTIARY"
        bgColor={'#E7EAF4'}
        fgColor={'#4765A9'}
      />
      <CustomButton
        onPress={onSignInWithGoogle}
        text={'Sign In with Google'}
        type="TERTIARY"
        bgColor={'#FAE9EA'}
        fgColor={'#DD4D44'}
      />
      <CustomButton
        onPress={onSignInWithApple}
        text={'Sign In with Apple'}
        type="TERTIARY"
        bgColor={'#e3e3e3'}
        fgColor={'#363636'}
      />
    </>
  );
};

export default SocialSignInButtons;
