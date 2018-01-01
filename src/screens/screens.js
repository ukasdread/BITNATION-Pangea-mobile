import { Navigation } from 'react-native-navigation';

//import Drawer from './modules/_global/Drawer';
import SplashScreen from './SplashScreen';
import Dashboard from './Dashboard';
import WalletScreen from './WalletScreen';
import CreateKeyStep1 from './Key/Create/CreateKeyStep1';
import CreateKeyStep2 from './Key/Create/CreateKeyStep2';
import CreateKeyStep3 from './Key/Create/CreateKeyStep3';
import VarifyKeyStep1 from './Key/Varify/VarifyKeyStep1';
import VarifyKeyStep2 from './Key/Varify/VarifyKeyStep2';
import VarifyKeyStep3 from './Key/Varify/VarifyKeyStep3';
import Intro from './Intro/RNSwiper';
import SendMoney from './WalletScreen/SendMoney';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('Pangea.SplashScreen', () => SplashScreen, store, Provider);
    Navigation.registerComponent('Pangea.Dashboard', () => Dashboard, store, Provider);
    Navigation.registerComponent('Pangea.CreateKeyStep1', () => CreateKeyStep1, store, Provider);
    Navigation.registerComponent('Pangea.CreateKeyStep2', () => CreateKeyStep2, store, Provider);
    Navigation.registerComponent('Pangea.CreateKeyStep3', () => CreateKeyStep3, store, Provider);
    Navigation.registerComponent('Pangea.VarifyKeyStep1', () => VarifyKeyStep1, store, Provider);
    Navigation.registerComponent('Pangea.VarifyKeyStep2', () => VarifyKeyStep2, store, Provider);
    Navigation.registerComponent('Pangea.VarifyKeyStep3', () => VarifyKeyStep3, store, Provider);
    Navigation.registerComponent('Pangea.Intro', () => Intro, store, Provider);
    Navigation.registerComponent('Pangea.SendMoney', () => SendMoney, store, Provider);
}