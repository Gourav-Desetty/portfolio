import { defineType, defineField } from 'sanity'

export const siteData = defineType({
  name: 'siteData',
  title: 'Site Data',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Full Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'github', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'twitter', title: 'Twitter URL', type: 'url' }),
    defineField({ name: 'leetcode', title: 'LeetCode URL', type: 'url' }),
    defineField({ name: 'photo', title: 'Hero Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'aboutHeading', title: 'About Heading', type: 'string' }),
    defineField({
      name: 'aboutBio',
      title: 'About Bio Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({ name: 'aboutQuote', title: 'About Quote', type: 'string' }),
    defineField({
      name: 'traits',
      title: 'Traits',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', type: 'string', title: 'Emoji Icon' }),
          defineField({ name: 'title', type: 'string', title: 'Title' }),
          defineField({ name: 'description', type: 'string', title: 'Description' }),
        ],
      }],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'category', type: 'string', title: 'Category' }),
          defineField({ name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] }),
        ],
      }],
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'number', type: 'string', title: 'Number (e.g. 01)' }),
          defineField({ name: 'title', type: 'string', title: 'Title' }),
          defineField({ name: 'description', type: 'string', title: 'Description' }),
          defineField({ name: 'highlights', type: 'array', title: 'Highlights', of: [{ type: 'string' }] }),
          defineField({ name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string' }] }),
          defineField({ name: 'githubUrl', type: 'url', title: 'GitHub URL' }),
        ],
      }],
    }),
    defineField({ name: 'contactHeading', title: 'Contact Heading', type: 'string' }),
    defineField({ name: 'contactSub', title: 'Contact Subtitle', type: 'string' }),
  ],
})
