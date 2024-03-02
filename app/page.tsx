import Image from "next/image";
import App from "./components/App";
import getCurrentUser from "./actions/getCurrentUser";



export default async function Home() {

  const currentUser = await getCurrentUser()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

        {currentUser ? <div>
                          <div>認証中</div>
                                <App />
                          </div> 
                          : <div>未承認</div>}
      
    </main>
  );
}
