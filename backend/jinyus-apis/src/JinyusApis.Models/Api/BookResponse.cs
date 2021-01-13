using System;
using System.Collections.Generic;

namespace JinyusApis.Models
{
    public class BookResponse
    {
        public Guid Id { get; set; }
        public string Class { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Chapter { get; set; }
    }
}