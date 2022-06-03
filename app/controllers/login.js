import Controller from '@ember/controller';

export default Controller.extend({
    actions:
    {
        verify_stu_login(event)
        {
            const stupwd='student@123';
            const stuid=document.getElementById("roll_no").value;
            let id= document.getElementById("stu_id").value;
            let pwd = document.getElementById("stu_pwd").value; 
            
        if(id!=stuid || pwd!=stupwd)
        {
            alert("login credentials not correct");       
        }
        else
        {
            alert("login credentials correct"); 
        }

        }
    }
    
});
