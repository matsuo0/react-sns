import { supabase } from "../lib/supabase";

export const authRepository = {
  async signup(name, email, password){
    const{data, error} = await supabase.auth.signUp({
      email,
      password,
      options: { 
        //user_metadata: { name } 
        data: { name } 
      }
    });

    if (error) {
      console.error('Signup error:', error.message);
      throw new Error(error.message);
    }

    if (data && data.user) {
      return data.user ? { ...data.user, userName: data.user.user_metadata.name } : null;
    } else {
      return null;
    }
  }
}