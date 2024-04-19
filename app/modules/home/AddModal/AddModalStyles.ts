import {StyleSheet} from 'react-native';
import {Colors, horizontalScale, verticalScale} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '85%',
    height: verticalScale(200),
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: verticalScale(40),
    borderWidth: 1,
    borderColor: Colors.gray,
    paddingLeft: horizontalScale(10),
  },
  button: {
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  closeBtn: {
    marginLeft: horizontalScale(10),
  },
});
