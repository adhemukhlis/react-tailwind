import PrimaryButtons from "./components/application-ui/elements/buttons/primary_buttons"; 
import RoundButtons from "./components/application-ui/elements/buttons/round_buttons"; 
import CircularButtons from "./components/application-ui/elements/buttons/circular_buttons"; 
import SecondaryButtons from "./components/application-ui/elements/buttons/secondary_buttons"; 
import WhiteButtons from "./components/application-ui/elements/buttons/white_buttons"; 
import ButtonWithLeadingIcon from "./components/application-ui/elements/buttons/button_with_leading_icon"; 
import ButtonWithTrailingIcons from "./components/application-ui/elements/buttons/button_with_trailing_icons"; 

function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',width:'20vw'}}>
      <PrimaryButtons/>
      <RoundButtons/>
      <CircularButtons/>
      <SecondaryButtons/>
      <WhiteButtons/>
      <ButtonWithLeadingIcon/>  
      <ButtonWithTrailingIcons/>
    </div>
  );
}

export default App;
