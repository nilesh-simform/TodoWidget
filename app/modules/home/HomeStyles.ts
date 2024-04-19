import {StyleSheet} from 'react-native';
import {
  Colors,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(50),
    backgroundColor: Colors.headerColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: moderateScale(16),
    color: Colors.white,
    fontWeight: '600',
  },
  itemContainer: {
    width: '100%',
    height: verticalScale(50),
    backgroundColor: Colors.lightGray,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    justifyContent: 'space-between',
  },
  itemTitle: {
    flex: 1,
    marginRight: horizontalScale(5),
  },
  deleteBtn: {
    marginLeft: horizontalScale(5),
  },
  floaterBtn: {
    position: 'absolute',
    right: horizontalScale(20),
    bottom: verticalScale(50),
    backgroundColor: Colors.gray,
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: moderateScale(30),
    color: Colors.white,
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
  radioContainer: {
    backgroundColor: Colors.white,
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filledRadio: {
    backgroundColor: Colors.green,
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: 15,
  },
  centeredRow: {
    alignItems: 'center',
  },
});
