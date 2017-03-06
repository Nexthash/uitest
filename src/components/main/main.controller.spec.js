import MainController from './main.controller';

describe('Main controller', () => {
    let mainController;
    beforeeach(() => {
        mainController = new MainController();
    });

    it('should add name and lastname to controller fields', () => {
    // arrange
    mainController.name = 'Tom';
    mainController.lastname = 'Hardy'; 
    // act
    mainController.add();
    // assert
    expect(mainController.list.length).toEqual(1);
    expect(mainController.list.name).toEqual('Tom');
    expect(mainController.list.lastname).toEqual('Hardy');
  });

    it('should not add when name and lastname empty', () => {
    // arrange
    mainController.name = '';
    mainController.lastname = ''; 
    // act
    mainController.add();
    // assert
    expect(mainController.list.length).toEqual(1);
    expect(mainController.list.name).toEqual('Tom');
    expect(mainController.list.lastname).toEqual('Hardy');
  });

    it('should not add when name and lastname already exist', () => {
    // arrange
    mainController.name = 'Tom';
    mainController.lastname = 'Hardy'; 
    // act
    mainController.add();
    // assert
    expect(mainController.list.length).toEqual(1);
    expect(mainController.list.name).toEqual('Tom');
    expect(mainController.list.lastname).toEqual('Hardy');
  });

    it('should clear name and lastname', () => {
    // arrange
    mainController.name = 'Tom';
    mainController.lastname = 'Hardy'; 
    // act
    mainController.clear();
    // assert
    expect(mainController.name).toEqual('');
    expect(mainController.lastname).toEqual('');
  });
});