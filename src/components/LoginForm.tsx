import { githubLogin, login } from "@/lib/action";

export default function LoginForm() {
  return (
    <>
      <form action={login}>
        <input type="email" name="email" placeholder="Enter Your Email"></input>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
        ></input>
        <button>로그인</button>
      </form>
      <form action={githubLogin}>
        <button>GitHub 로그인</button>
      </form>
    </>
  );
}
