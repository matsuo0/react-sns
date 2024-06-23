export const authRepository = {
  async singup(name, email, password){
    const{data, error} = await supabase.auth.singup({
      email,
      password,
      options: { data: { name } },
    });
    if (error != null) throw new Error(error.message);
    return {
      ...data.user, userName: data.user.user_metadata.name
    };
  }
}