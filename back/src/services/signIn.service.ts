import {signInModel} from "../model/signIn.model"

export const getSignIn = async () => {
    try {
        const signIn = await signInModel;
        return signIn
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};

