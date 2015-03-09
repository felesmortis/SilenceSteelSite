using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FZ.Models
{
    public class Post
    {
        public int chapter { get; set; }
        public int section { get; set; }
        public string content { get; set; }
        public string perspective { get; set; }
    }
}