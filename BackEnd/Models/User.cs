using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace BackEnd.Models
{
    public class User
    {
        public int id {get;set;}
        public string UserName {get;set;}
        
        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        
    }
}