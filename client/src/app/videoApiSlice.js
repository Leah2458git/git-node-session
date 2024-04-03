import apiSlice from "./apiSlice"

const videoApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllVideos: build.query({
            query: () => ({
                url: '/api/lessonVideo'
            })
        }),
        getPathById: build.query({
            query: (id) => ({
                url: '/api/lessonVideo/'+id,
            })
        }),
        getVideoByRole: build.query({
            query: (role) => ({
                url: '/api/lessonVideo/role/'+role
            })
        }),
        getVideoByName: build.mutation({
            query: (fileName) => ({
                url: '/upload',
                method:"POST",
                body:fileName
            })
        }),
        createLessonVideo: build.mutation({
            query: (name) => ({
                url: '/api/lessonVideo/',
                method:"POST",
                body:name
               
            })
        }),
     }),
})
export const {  useGetAllVideosQuery,useGetPathByIdQuery,useCreateLessonVideoMutation,useGetVideoByRoleQuery,useGetVideoByNameMutation } = videoApiSlice