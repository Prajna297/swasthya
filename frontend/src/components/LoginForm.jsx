const LoginForm = () => {
  return (
    <div className='mx-auto col-span-2 bg-white py-11 px-10 m-20 w-[30rem] shadow-md border-b-8 border-teal-700'>
      <h1 className='text-2xl text-slate-600 font-bold text-center'>
        Sign in to your account
      </h1>

      <div className='flex justify-center my-10'>
        <button>
          Login with Moralis!
        </button>
      </div>
    </div>
  )
}

export default LoginForm
