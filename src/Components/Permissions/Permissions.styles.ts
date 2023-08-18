import { StyleSheet } from 'react-native';

export const PermissionsStyles = StyleSheet.create({
  permissionsItemWrap: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  permissionsItem: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  permissionsIconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    width: 24,
    marginRight: 10,
  },
  permissionsIcon: { fontSize: 24 },
  permissionsIconStatusOk: { color: 'green' },
  permissionsIconStatusNot: { color: 'red' },
  permissionsTitle: { fontSize: 12, margin: 0, marginRight: 10 },
  permissionsStatus: { fontSize: 12, margin: 0, marginRight: 10 },
});
