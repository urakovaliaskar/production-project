import { classNames } from './classsNames';

describe('classNames', () => {
  test('with one param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional params', () => {
    expect(classNames(
      'someClass',
      {},
      ['class1', 'class2'],
    )).toBe('someClass class1 class2');
  });

  test('with mods', () => {
    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: true,
      },
      ['class1', 'class2'],
    )).toBe('someClass class1 class2 hovered scrollable');
    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: false,
      },
      ['class1', 'class2'],
    )).toBe('someClass class1 class2 hovered');

    expect(classNames(
      'someClass',
      {
        hovered: true,
        scrollable: undefined,
      },
      ['class1', 'class2'],
    )).toBe('someClass class1 class2 hovered');
  });
});
