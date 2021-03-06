import { MediaQueryStyleSheet } from 'react-native-responsive'
import Colors from 'pangea-common-reactnative/styles/colors'

const styles = MediaQueryStyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	infoContainer: {
		paddingBottom: 20,
		paddingTop: 10,
		marginLeft: 8,
		marginRight: 8,
		borderRadius: 8,
		backgroundColor: Colors.shadeOf(Colors.BitnationColor, 0.2),
		alignItems: 'center',
	},
	header: {
		backgroundColor: 'transparent',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginBottom: 20,
	},
	achievementsContainer: {
		marginTop: 8,
		marginBottom: 10,
	},
	placeholder: {
		resizeMode: 'contain',
	},
	avatar: {
		height: 100,
		width: 100,
		borderRadius: 50,
	},
	nameText: {
		fontSize: 28,
		color: Colors.titleColor,
		letterSpacing: 0,
		textAlign: 'center',
		backgroundColor: 'transparent',
	},
	infoText: {
		fontSize: 16,
		color: Colors.BitnationLightColor,
		letterSpacing: -0.65,
		lineHeight: 20.8,
		textAlign: 'center',
		backgroundColor: 'transparent',
	},
	ethAddress: {
		fontSize: 14,
		color: Colors.BitnationLightColor,
		letterSpacing: -0.65,
		lineHeight: 20.8,
		textAlign: 'center',
		backgroundColor: 'transparent',
	},
	fakeNavigationBar: {
		height: 64,
		backgroundColor: 'transparent',
	},
})

export default styles
