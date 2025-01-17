module.exports = {
    async find(ctx) {
      // Fetch blogs and populate author and blogImage fields
      const blogs = await strapi.entityService.findMany('api::blog.blog', {
        populate: ['author', 'blogImage'], // Include author and blogImage fields
      });
  
      // Format the response
      const formattedBlogs = blogs.map((blog) => ({
        id: blog.id,
        title: blog.title,
        desc: blog.desc,
        date: blog.date,
        publishDate: blog.publishDate,
        month: blog.month,
        author: {
          name: blog.author?.name || 'Unknown',
        },
        blogImage: blog.blogImage
          ? `${strapi.config.get('server.url')}${blog.blogImage.url}`
          : null,
      }));
  
      return formattedBlogs;
    },
  
    async findOne(ctx) {
      const { id } = ctx.params;
  
      // Fetch the blog by ID and populate author and blogImage fields
      const blog = await strapi.entityService.findOne('api::blog.blog', id, {
        populate: ['author', 'blogImage'],
      });
  
      if (!blog) {
        return ctx.notFound('Blog not found');
      }
  
      // Format the response
      return {
        id: blog.id,
        title: blog.title,
        desc: blog.desc,
        date: blog.date,
        publishDate: blog.publishDate,
        month: blog.month,
        author: {
          name: blog.author?.name || 'Unknown',
        },
        blogImage: blog.blogImage
          ? `${strapi.config.get('server.url')}${blog.blogImage.url}`
          : null,
      };
    },
  
    async create(ctx) {
      const { title, desc, date, publishDate, month, author, blogImage } = ctx.request.body;
  
      // Create a new blog
      const newBlog = await strapi.entityService.create('api::blog.blog', {
        data: {
          title,
          desc,
          date,
          publishDate,
          month,
          author,
          blogImage,
        },
      });
  
      return newBlog;
    },
  
    async update(ctx) {
      const { id } = ctx.params;
      const { title, desc, date, publishDate, month, author, blogImage } = ctx.request.body;
  
      // Update the blog
      const updatedBlog = await strapi.entityService.update('api::blog.blog', id, {
        data: {
          title,
          desc,
          date,
          publishDate,
          month,
          author,
          blogImage,
        },
      });
  
      return updatedBlog;
    },
  
    async delete(ctx) {
      const { id } = ctx.params;
  
      // Delete the blog
      const deletedBlog = await strapi.entityService.delete('api::blog.blog', id);
  
      return deletedBlog;
    },
  };
  