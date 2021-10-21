import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import MobileDetect from "mobile-detect";
function App() {
  const [mobile, setMobile] = useState("");
  const [phone, setPhone] = useState("");
  const [tablet, setTablet] = useState("");
  const [userAgent, setUserAgent] = useState("");
  const [os, setOs] = useState("");
  const [isIPhone, setIsIPhone] = useState("");
  const [isBot, setIsBot] = useState("");
  const [versionWebkit, setVersionWebkit] = useState("");
  const [versionStrBuild, setVersionStrBuild] = useState("");

  useEffect(() => {
    const md = new MobileDetect(navigator.userAgent);

    // more typically we would instantiate with 'window.navigator.userAgent'
    // as user-agent; this string literal is only for better understanding

    setMobile(md.mobile()); // 'Sony'
    setPhone(md.phone()); // 'Sony'
    setTablet(md.tablet()); // null
    setUserAgent(md.userAgent()); // 'Safari'
    setOs(md.os()); // 'AndroidOS'
    setIsIPhone(md.is("iPhone")); // false
    setIsBot(md.is("bot")); // false
    setVersionWebkit(md.version("Webkit")); // 534.3
    setVersionStrBuild(md.versionStr("Build")); // '4.1.A.0.562'
    return () => {};
  }, []);
  return (
    <div className="App">
      <p>mobile: {mobile}</p>
      <p>phone: {phone}</p>
      <p>tablet: {tablet}</p>
      <p>userAgent: {userAgent}</p>
      <p>os: {os}</p>
      <p>isIPhone: {isIPhone}</p>
      <p>isBot: {isBot}</p>
      <p>versionWebkit: {versionWebkit}</p>
      <p>versionStrBuild: {versionStrBuild}</p>
    </div>
  );
}

export default App;
