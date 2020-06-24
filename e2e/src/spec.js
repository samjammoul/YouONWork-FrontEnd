describe('Protractor Demo App', function() {

    let loginPage = 'http://localhost:4200/login' ;



    /*

    This method to creat a new task in Dashboard

     */

    it('should have a new take t10', function() {
        browser.get(loginPage);
        browser.sleep(5000);
        let list = element.all(by.css('mat-action-list  mat-list-item'));
         list.get(2).click();
         browser.sleep(5000);
        let btns = element.all(by.css('span'));
        btns.get(2).click();
        let inputs = element.all(by.css('input'));
        inputs.get(0).sendKeys('t10');
        browser.sleep(5000);
        let addTask = element(by.buttonText('Add Task'));
        addTask.click();
        browser.sleep(2000);
        let task = element.all(by.css('.example-box'));
        let taskText = task.get(1).getText();
        expect(taskText).toContain('t10');

    });

    /*

    This method to delete task 10 task in Dashboard

     */

    it('should delete task t10', function() {
        browser.get(loginPage);
        browser.sleep(5000);
        let list = element.all(by.css('mat-action-list  mat-list-item'));
        list.get(2).click();
        browser.sleep(5000);
        let tasks = element.all(by.css('.example-box'));
        let tasktxt = tasks.get(1).getText();
        expect(tasktxt).toContain('t10');
        let btns = element.all(by.css('span'));
        btns.get(2).click();
        let task = element.all(by.css('.example-box'));
        let taskText = task.get(0).getText();
        expect(taskText).toContain('t1');
    });


    /*

      This method to test the validation of input od add new task
      input "task_" => the error will be Pleas Enter only letters and numbers

 */

    it('should show a error Pleas Enter only letters and numbers  ', function() {
        browser.get(loginPage);
        browser.sleep(5000);
        let list = element.all(by.css('mat-action-list  mat-list-item'));
        list.get(2).click();
        browser.sleep(5000);
        let btns = element.all(by.css('span'));
        btns.get(2).click();
        let inputs = element.all(by.css('input'));
        inputs.get(0).sendKeys('task_');
        browser.sleep(5000);
        let addTask = element(by.buttonText('Add Task'));
        addTask.click();
        browser.sleep(5000);
        let errors = element.all(by.css('mat-error'));
        let errorText = errors.get(0).getText();
        expect(errorText).toContain('Pleas Enter only letters and numbers');

    });

    /*

     This method to test the validation of input od add new task
     empty value   => Task name is  required

*/

        it('should show a error Task name is  required', function() {
            browser.get(loginPage);
            browser.sleep(5000);
            let list = element.all(by.css('mat-action-list  mat-list-item'));
            list.get(2).click();
            browser.sleep(5000);
            let btns = element.all(by.css('span'));
            btns.get(2).click();
            let inputs = element.all(by.css('input'));
            inputs.get(0).sendKeys('');
            browser.sleep(5000);
            let addTask = element(by.buttonText('Add Task'));
            addTask.click();
            browser.sleep(5000);
            let errors = element.all(by.css('mat-error'));
            let errorText = errors.get(0).getText();
            expect(errorText).toContain('Task name is required');

        });

        /*

        This method to creat a new team

         */

        it('should add a new team', function() {
            browser.get(loginPage);
            browser.sleep(10000);
            const list = element(by.buttonText('Add new team'));
            list.click();
            browser.sleep(5000);
            let inputs = element.all(by.css('input'));
            inputs.get(0).sendKeys('testTeam');
            browser.sleep(5000);
            let addTeam = element(by.buttonText('Add Team'));
            addTeam.click();
            browser.sleep(2000);
            let team = element.all(by.css('mat-list-item')).last();
            let teamText = team.getText();
            expect(teamText).toContain('testTeam');

        });

        /*

         This method to test the validation of input od add new team
         input "testTeam_" => the error will be Pleas Enter only letters and numbers

        */

    it('should show a error Pleas Enter only letters and numbers ', function() {
        browser.get(loginPage);
        browser.sleep(10000);
        const list = element(by.buttonText('Add new team'));
        list.click();
        browser.sleep(5000);
        let inputs = element.all(by.css('input'));
        inputs.get(0).sendKeys('testTeam_');
        const addTeam = element(by.buttonText('Add Team'));
        addTeam.click();
        let errors = element.all(by.css('mat-error'));
        let errorText = errors.get(0).getText();
        expect(errorText).toContain('Pleas Enter only letters and numbers');

    });



/*

 This method to test the validation of input od add new task
 empty value   => Team name is  required

*/

    it('should show a error team name is  required', function() {
        browser.get(loginPage);
        browser.sleep(10000);
        const list = element(by.buttonText('Add new team'));
        list.click();
        browser.sleep(5000);
        let inputs = element.all(by.css('input'));
        inputs.get(0).sendKeys('');
        const addTeam = element(by.buttonText('Add Team'));
        addTeam.click();
        let errors = element.all(by.css('mat-error'));
        let errorText = errors.get(0).getText();
        expect(errorText).toContain('Team name is required');

    });

        /*

            This method to creat a new status

             */

        it('should add a new status', function() {
            browser.get(loginPage);
            browser.sleep(5000);
            let list = element.all(by.css('mat-action-list  mat-list-item'));
            list.get(2).click();
            browser.sleep(5000);
            let btns = element.all(by.css('span')).last();
            btns.click();
            let inputs = element.all(by.css('input'));
            inputs.get(0).sendKeys('s10');
            browser.sleep(5000);
            let addTask = element(by.buttonText('Add Status'));
            addTask.click();
            browser.sleep(2000);
            let task = element.all(by.css('h2')).last();
            let taskText = task.getText();
            expect(taskText).toContain('s10');

        });


            /*
            This method to creat a new status
             */

        it('should show a error status name is  required', function() {
            browser.get(loginPage);
            browser.sleep(5000);
            let list = element.all(by.css('mat-action-list  mat-list-item'));
            list.get(2).click();
            browser.sleep(5000);
            let btns = element.all(by.css('span')).last();
            btns.click();
            let inputs = element.all(by.css('input'));
            inputs.get(0).sendKeys('');
            browser.sleep(5000);
            let addTask = element(by.buttonText('Add Status'));
            addTask.click();
            let errors = element.all(by.css('mat-error'));
            let errorText = errors.get(0).getText();
            expect(errorText).toContain('Status name is required');

        });

        /*
            This method to creat a new status
             */

    it('should show a error Pleas Enter only letters and numbers', function() {
        browser.get(loginPage);
        browser.sleep(5000);
        let list = element.all(by.css('mat-action-list  mat-list-item'));
        list.get(2).click();
        browser.sleep(5000);
        let btns = element.all(by.css('span')).last();
        btns.click();
        let inputs = element.all(by.css('input'));
        inputs.get(0).sendKeys('s10_');
        browser.sleep(5000);
        let addTask = element(by.buttonText('Add Status'));
        addTask.click();
        let errors = element.all(by.css('mat-error'));
        let errorText = errors.get(0).getText();
        expect(errorText).toContain('Pleas Enter only letters and numbers');

    });



});
