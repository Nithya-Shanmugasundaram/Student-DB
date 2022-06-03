import Route from '@ember/routing/route';

export default Route.extend({
    
    actions:
    {
        verify_mgmt_login(){
            const mgmtid='management';
            const mgmtpwd='management@123';
            const mid= document.getElementById("mgmt_id").value;
            const mpwd = document.getElementById("mgmt_pwd").value;
        if(mid!=mgmtid || mpwd!=mgmtpwd)
        {
            alert("login credentials not correct");       
        }
        else
        {
            this.transitionTo('management'); 
        }
        },
        verify_stu_login()
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
    },
   /* model()
     {
        return this.store.findAll("roll_no");
      }*/
});
