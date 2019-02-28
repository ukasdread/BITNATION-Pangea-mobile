import { Platform } from "react-native";
import { isiPhoneX } from "../../utils/normalizer";
import Colors from "../../global/colors";

export default {
  wrapper: {
    ...Platform.select({
      ios: {
        paddingTop: isiPhoneX() ? 35 : 20
      },
      android: {
        paddingTop: 20
      }
    }),
    width: "100%",
    //paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  leftIconStyle: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  rightIconStyle: {
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    color: Colors.navBarTextColor,
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "500"
  }
};