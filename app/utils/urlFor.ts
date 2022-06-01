import urlBuilder from '@sanity/image-url'
import { projectId, dataset } from '~/utils'

export const imageUrlFor = (source: { _ref: string }) => urlBuilder({ projectId, dataset }).image(source).toString()
