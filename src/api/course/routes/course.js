// src/api/course/routes/course.js

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/courses',
        handler: 'course.find',
        config: {
          auth: false, // Set to true if authentication is required
          policies: [],
          description: 'Get all courses with image URLs',
          tags: ['api', 'courses'],
        },
      },
      {
        method: 'GET',
        path: '/courses/:id',
        handler: 'course.findOne',
        config: {
          auth: false,
          policies: [],
          description: 'Get a single course by ID with image URL',
          tags: ['api', 'courses'],
        },
      },
      {
        method: 'POST',
        path: '/courses',
        handler: 'course.create',
        config: {
          auth: false, // Set to true if authentication is required
          policies: [],
          description: 'Create a new course',
          tags: ['api', 'courses'],
        },
      },
      {
        method: 'PUT',
        path: '/courses/:id',
        handler: 'course.update',
        config: {
          auth: false,
          policies: [],
          description: 'Update an existing course by ID',
          tags: ['api', 'courses'],
        },
      },
      {
        method: 'DELETE',
        path: '/courses/:id',
        handler: 'course.delete',
        config: {
          auth: false,
          policies: [],
          description: 'Delete a course by ID',
          tags: ['api', 'courses'],
        },
      },
    ],
  };
  