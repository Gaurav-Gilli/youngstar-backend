module.exports = {
    async find(ctx) {
      // Get the courses data
      const courses = await strapi.entityService.findMany('api::course.course', {
        populate: ['imageUrl'],  // Populate the imageUrl field
      });
  
      // Add the full URL for the imageUrl field
      const coursesWithImageUrls = courses.map(course => {
        if (course.imageUrl && course.imageUrl.url) {
          course.imageUrl = `${strapi.config.get('server.url')}${course.imageUrl.url}`;
        }
        return course;
      });
  
      return coursesWithImageUrls;
    },
  
    async findOne(ctx) {
      const { id } = ctx.params;
      
      // Fetch the course by ID and populate the imageUrl field
      const course = await strapi.entityService.findOne('api::course.course', id, {
        populate: ['imageUrl'],
      });
  
      if (course.imageUrl && course.imageUrl.url) {
        course.imageUrl = `${strapi.config.get('server.url')}${course.imageUrl.url}`;
      }
  
      return course;
    },
    async create(ctx) {
      const { documentId, title, lesson, duration, featured, price, isFree, tag, skillLevel, categories, date, insName, imageUrl, locale } = ctx.request.body;
  
      // Create the course entry in the database
      const createdCourse = await strapi.entityService.create('api::course.course', {
        data: {
          documentId,
          title,
          lesson,
          duration,
          featured,
          price,
          isFree,
          tag,
          skillLevel,
          categories,
          date,
          insName,
          imageUrl, // The image URL can be a path or a media file
          locale,
        },
      });
  
      // Add full URL for image if available
      if (createdCourse.imageUrl) {
        createdCourse.imageUrl = `${strapi.config.get('server.url')}${createdCourse.imageUrl}`;
      }
  
      return createdCourse;
    },
  
    async update(ctx) {
      const { id } = ctx.params;
      const { documentId, title, lesson, duration, featured, price, isFree, tag, skillLevel, categories, date, insName, imageUrl, locale } = ctx.request.body;
  
      // Update the course entry in the database
      const updatedCourse = await strapi.entityService.update('api::course.course', id, {
        data: {
          documentId,
          title,
          lesson,
          duration,
          featured,
          price,
          isFree,
          tag,
          skillLevel,
          categories,
          date,
          insName,
          imageUrl, // The image URL can be a path or a media file
          locale,
        },
      });
  
      // Add full URL for image if available
      if (updatedCourse.imageUrl) {
        updatedCourse.imageUrl = `${strapi.config.get('server.url')}${updatedCourse.imageUrl}`;
      }
  
      return updatedCourse;
    },
  
    async delete(ctx) {
      const { id } = ctx.params;
  
      // Delete the course entry from the database
      const deletedCourse = await strapi.entityService.delete('api::course.course', id);
  
      return deletedCourse;
    },
  };
  