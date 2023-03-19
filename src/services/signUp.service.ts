import {signUpModel} from "../model/signUp.model"
import { ISignUpBack } from "../model/signUp.model";

export const getSignUp = async (user: ISignUpBack) => {
try {
    console.log("users services connected");
    const _userSign = await signUpModel.create(user)
    await _userSign.save();
        return _userSign
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};
