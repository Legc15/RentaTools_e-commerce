import InputForm from "../../components/Forms/InputForm"
import "./styles.css"

const logoSignup =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEc0lEQVR4nO2ba4hVVRiGH9NqBiUxwqkopqwoKYj+VEIRQ1YgFllGBSEh0XQhNSIqZKofQRep6AaRUGgQgVj98IeFlZWIxdg9m5IKCzQqnW44ZjYnPnj3sGa717nNOXt9U/PC++PsWWfPer+197e+9a51YAITaBeOBa4HngfeB34C9gL7gT3AJ8Aa4HbgDP4jmATMB14H/gEqDfBT4Fagk3GKc4H+BkUXcSewSMEcFzgUeKSJEa/F9cBMnGM68HaLhYf8wXN+mN6iR74WLWGehTMcBmwsQXzGXcAJOMKjJYrP+IECnxznA8MJAmDsSy3+EM3XlUS0Qqo7ZQAWJhSf8ZmUAXjPQQD2agYqHbMSvvt53pAiALc5EJ7xlRQBWONAeMbdKQLwpQPhIY8pOwD7HIgOeV6Z4g93IDjPeWUGYJoDwXleXnYFOOxAdMgLKRk/OhAdsnSf4B0HojMeADrKDsAKB8IzmhFTOi5xIDzjwykCMMVRHkhmka1wIH4riXd7hhIH4EoS44GE4jd52DDpBAYSiB/ytEdwppyZMgPQizNcCvz9f/ABq+Fq4K82i39SaxG36GlTfWDnCJYxTnA0sLaF4j8GzsY5OoCLgLuBE3Vt7hit82+BG1V1TtXpkSuAo3CE2cALwG9Bx21GuD843WGl6mN1+oi28blaDs8UzfPXams8XP2tA44L+mF5YY4Cdp/2K+8CrmvX7tFs4OUaByEsFzwEnBR8r0t5YrFG9E51el6u3QxgCfB55L72tGWv2xMKXLXAfqip04I6JkwCljZoipp7tEWjsgA4RQJDi61brs69Og0Sqyu2AcdrxJcDf0YC1B+5hxVtFzQrfoYevVYltwMNriW+kf1tAXs10saCMln9tVyxITKj3NSo+CN0vK2SiEPKJXYG6c1ImzcK+j2zytN6S73ip2nhUUlIezVQFRhrc0+k/1sj7fcrH9XES4nF79Q0O6eGG225qQjvVvnOdj1VUVyTWHz2XtcS0mwAKjqQWYgubTymFD+swur0Oto2G4DPYgF40MHof6W+LM9d/11ze39Ae1qLsDLXblvByvXkoqw/6CAAln9Qhi+a6ppFV242OeiQxVIH4it6Cg1f6PNrtA5WJ/yh+1r5PApFBUQKZlPbL/ps5XErkU3vz4YXOx24vfn5/7s2bYJk9zWLfwRzHQiv5EZmsz4P5hZNY8HNwf8ZZbb0OhCe0TZhDc8F137VwqpXK8mMMZf4sly7JQVnnGzQR9DnQHjGIb2S89tYBwzmq8GnHAgPeZVK4Z/bFAD7HdMoPO1AdMi31K9lbQjAvsDCG8EdDkTn2aPDWQNNBKCaL2mO1UE4zeEZoAG9BqdWqVDNdyxysL6PtN9QzSJb60B0nqvUtx7NBPm/7y4wQBdH7mXmzpHUqJV3OBCd5+MaVTNlv474gX1yg1dGTNsX6z1T1K0VV8UZV2tq7JCrvKfO730EXEyDmKwfLq6X9ewlN2wP7KypOiixSrtIu5Tdd6jWtwXVOd73FCeAA/wL4K5aPZrdp5UAAAAASUVORK5CYII="

const SignUp = () => {
  return (
    <div className="body padding min-height">
      <div className="signup">
        <img className="logoSignup" src={logoSignup}></img>
        <h2 className="welcome">Bienvenido! Por favor registrate.</h2>
        <InputForm />
      </div>
    </div>
  )
}

export default SignUp
