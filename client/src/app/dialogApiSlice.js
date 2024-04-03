import apiSlice from "./apiSlice"

const dialogApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getDialogs: build.query({
            query: (role) => ({
                url: '/api/dialogue/'+role
            }),
            providesTags:["dialogue"]
           
        }),
        getDialogsByUserId: build.query({
            query: (id) => ({
                url: '/api/dialogue/id/'+id
            }),
            providesTags:["dialogue"]
           
        }),
        createDialogs: build.mutation({
            query: (dialog) => ({
                url: '/api/dialogue',
                method:"POST",
                body:dialog
            }),
           invalidatesTags:["dialogue"]
        }),
        updateDialog: build.mutation({
            query: (obj) => ({
                url: '/api/dialogue/'+obj.id,
                method:"PUT",
                body:obj.message
            }),
            invalidatesTags:["dialogue"]
        }),
        updateDialogueRead: build.mutation({
            query: (obj) => ({
                url: '/api/dialogue/read/'+obj.id,
                method:"PUT",
                body:obj
            }),
            invalidatesTags:["dialogue"]
        }),
       
    })

})
export const {  useGetDialogsQuery,useCreateDialogsMutation,useUpdateDialogMutation,useUpdateDialogueReadMutation,useGetDialogsByUserIdQuery} = dialogApiSlice
