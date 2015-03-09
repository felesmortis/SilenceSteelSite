using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FZ.Models;
using FZ.Services;

namespace FZ.Controllers
{
    public class PostController : ApiController
    {
        private PostRepository postRepository;

        public PostController()
        {
            postRepository = new PostRepository();    
        }
        [HttpGet]
        [ActionName("Posts")]
        public IEnumerable<Post> GetAllPosts()
        {
            return postRepository.GetAllPosts();
        }
        [HttpGet]
        [ActionName("Post")]
        public IHttpActionResult GetPost(int chapter, int section)
        {
            var post = postRepository.GetPost(chapter, section);//.FirstOrDefault((p) => p.chapter == chapter && p.section == section);
            if (post == null)
                return NotFound();
            return Ok(post);
        }
       /* public IHttpActionResult GetPost(string id)
        {
            string[] strComposite = id.Split(',');
            IEnumerable<int> IEcomposite = strComposite.Select<string, int>(c => int.Parse(c));
            int[] composite = IEcomposite.ToArray<int>();
            var post = GetAllPosts().FirstOrDefault((p) => p.chapter == composite[0] && p.section == composite[1]);
            if (post == null)
                return NotFound();
            return Ok(post);
        }*/
    }
}
