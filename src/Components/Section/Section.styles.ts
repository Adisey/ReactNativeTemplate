import { StyleSheet } from 'react-native';

export const SectionStyles = StyleSheet.create({
  sectionContainer: {
    borderColor: '#888',
    borderStyle: 'solid',
    marginBottom: 10,
    marginHorizontal: 5,
    marginTop: 20,
    padding: 0,
  },
  sectionTitleIcon: {
    fontSize: 26,
    marginRight: 10,
  },
  sectionTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#888',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescriptionContainer: {
    padding: 12,
    marginTop: 8,
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
  },
});
