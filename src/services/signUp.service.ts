import {signUpModel} from "../model/signUp.model"
import {ISignUpBack} from "../model/signUp.model";
import bcrypt from "bcrypt";

// export const getSignUp = async (user: any) => {
//     const { firstName, lastName, emailAddress, shippingAddress, password} = user
  
//     const encryptedPassword = await bcrypt.hash(password, 10)
  
//     const newUser = new UserModel({
//       firstName,
//       lastName,
//       email: emailAddress.toLowerCase(),
//       shippingAddress,
//       password: encryptedPassword,
//     })
  
//     try {
//       const oldUser = await UserModel.findOne({ emailAddress })
  
//       if (oldUser) {
//         throw new Error('User already exists')
//       }
  
//       const savedUser = await newUser.save()
//       return savedUser
  
//     } catch (e) {
//       throw new Error('Error while creating new user')
//     }
//   }

export const getSignUp = async (user: ISignUpBack) => {

    try {
    const _userSign = await signUpModel.create(user)
    await _userSign.save();
        return _userSign
    } catch (e) {
        throw Error('Error')
    }
};
