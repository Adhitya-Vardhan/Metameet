import z from "zod";

export const SignupSchema = z.object({
    username: z.string().email(),
    password: z.string().min(8),
    type: z.enum(["admin", "user"]),
})

export const SignInSchema = z.object({
    username: z.string().email(),
    password: z.string().min(8),
})

export const UpdateMetaSchema = z.object({
   avatarId: z.string()
})


// limting the dimentsion , {as we pass it as a string, we would use regex to validate it}
export const CreateSpaceSchema = z.object({
    name: z.string(),
    dimensions: z.string().regex(/^[0-9]{1,4}x[0-9]{1,4}$/),
    mapId: z.string()
})

export const AddElementSchema = z.object({
    spaceId: z.string(),
    elementId: z.string(),
    x:z.number(),
    y:z.number()
})

export const CreateElementSchema = z.object({
    width: z.number(),
    height: z.number(),
    static: z.boolean(),
    imageUrl: z.string()
})

export const UpdateElementSchema = z.object({
    imageUrl: z.string()
})



//an array of the z array objects , 
export const CreateMapSchema = z.object({
    thumbnail: z.string(),
    dimensions: z.string().regex(/^[0-9]{1,4}x[0-9]{1,4}$/),
    defaultElements : z.array(z.object({
        elementId: z.string(),
        x: z.number(),
        y: z.number()
    }))
})


