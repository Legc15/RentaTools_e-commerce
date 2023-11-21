import SignInForm from "../../components/Forms/signInForm"
import "./styles.css"

const SignIn = () => {
  return (
    <div className="body padding">
      <div className="signin">
        <img
          className="logoSignin"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5UlEQVR4nO2bWUhVURSGP9MGG7SgHsomGvAhm6BoopeynrSRZiGjaBCCBm2eIyiiaA6jAXqpKCIiTKNeKiuwiQaCoiiEiorEMmzU2LROXU73ep3uXtvsh//lnsPZ+//vHtZZax/4D3VEAT2ACcAiYLNwHTAHGAI05R/EUOAg8BYoD8NSIAcYAzSgjmMYcKMSokPxMTAbiKGOIQ44WgPhft4GkqgjSASe1KJ4jyXAeBxHb+BNBMR7/OayCZ2AlxEU7/ErMArH0BC4ZkG8x2KgIw5hjUXxHi9IXOHE0C9VMMBwBg5gn5J4w6faMUIc8EnRAMNUTQPSlcUbntA04JgDBhQB0VoGvHDAgHKtMLk5UOaAeMNJGgZ0d0C4xwUaBvR1QLjH1RoGJDkg3OMyDQMSHBDu0SRNrCPKgSDI40iUcN0B8YZttAzY7ID4eyhigAMGZKKMh4rivwPttA1IVzTgOA4gBrirIP6TJGOcwGDJ2No0YDmOYaVF8bmSiHUKUVL/s7HtxeMoYoBDERR/H2iL44gCsiKwJpyRHKRzaBwiJdUPuFkLwk2pbSaOYpzUBEwnB8pvi4EDMlRNfX9iNY14JQtrvCx4mVJxngK0xhFcDujwcxmiAyVCKxYzmsm9PYFVwKUQByVKxKgd8nYXLQamAI9895rnnwX6K+unwNcxswAabAr4rViKJ/19U6UF0AHoArT0PbezJDmeVmKknAe6YhlxIQzwChWNgDtBrn0A8oAtckZoOjAVmA+sl9C2sBrTxTw3zZb4FOBwBQa8kjnaC/gcwS0xGPdEumA6VubfiQoMMDwp15daNsBwV6RMSAQeyLzcHcYAw2ky5/MVTNiAJdyvoBPvJXHaTVZ4mwb8kKN5YREr+/R2ILuKPF3JlxYzHDMURsEz2WlCIrmaK25VOVdMyHOpYJIsh41sdKJE9un2Usm1acCbYEdvYy3984G8KgtimsIomOc3YKJCJwyXSPs5ltu96Ddgm5IBn2VXSLXcbqmM+t/Yr2SA4SDJH9pud8Qf+b+Goob4fHm7W6G9DiRKoGCzAyUSECVIgGTbgLX4kG25AxkSC+QqiDfc6zegCXDOUuN5In6uknjDnQSB2ZdnAbci2HCRBEAmEPqoaMBfsUCwxGarKtKsJe/CNJwmRl9RFP+lJgXUxjJKZvtoQulwr8On5J4sRfGGW6khFgR5aLiEyGs5tZGkkBXyH6k36bkaI9V3KjScAaMllX1bSbipHG+s7fphA2A4sFASmaEMOCLX+gR8GGmLZr+fLGuUFRT4xBfabNwFFASIL5MPJesVDgcYYCo69Q4t5OUqoy5+3kp9w09aN/QeHg8u5wAAAABJRU5ErkJggg=="
        />
        <SignInForm />
      </div>
    </div>
  )
}

export default SignIn
