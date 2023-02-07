
//

var app = new function() 
{
    this.el = document.getElementById('applications');
  
    this.applications = [];
  
    
    
    this.FetchAll = function() 
    {

      var data = '';
  
      if (this.applications.length > 0) 
      {
        for (i = 0; i < this.applications.length; i++) 
        {
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.applications[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')"">X</button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.applications.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () 
    {
      el = document.getElementById('addApplication');
      var task = el.value;
  
      if (task) 
      {
        this.applications.push(task.trim());
        el.value = '';
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) 
    {
      var el = document.getElementById('editApplications');
      el.value = this.applications[item];
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() 
      {
        var task = el.value;
  
        if (task) 
        {
          self.applications.splice(item, 1, task.trim());
          self.FetchAll();
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) 
    {
      this.applications.splice(item, 1);
      this.FetchAll();
    };
  
    this.Count = function(data) 
    {
      var el   = document.getElementById('counter');
      var name = 'Applicants';
  
      if (data) 
      {
          if(data ==1)
          {
              name = 'Applicant'
          }
        el.innerHTML = data + ' ' + name ;
      } 
      else 
      {
        el.innerHTML = 'No ' + name;
      }
    };
    
  }
  
  app.FetchAll();
  
  function CloseInput() 
  {
    document.getElementById('edit-box').style.display = 'none';
  }