"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { EndcoreCard } from "@/components/ui/EndcoreCard"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"

const profileFormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    bio: z.string().max(160).min(4),
    role: z.string().min(1, {
        message: "Please select a role.",
    }),
})

const settingsFormSchema = z.object({
    marketing_emails: z.boolean().default(false).optional(),
    security_emails: z.boolean(),
})

export default function FormsPage() {
    const profileForm = useForm<z.infer<typeof profileFormSchema>>({
        resolver: zodResolver(profileFormSchema),
        defaultValues: {
            username: "",
            email: "",
            bio: "",
        },
    })

    const settingsForm = useForm<z.infer<typeof settingsFormSchema>>({
        resolver: zodResolver(settingsFormSchema),
        defaultValues: {
            marketing_emails: true,
            security_emails: true,
        },
    })

    function onProfileSubmit(data: z.infer<typeof profileFormSchema>) {
        toast.success("Profile updated!", {
            description: JSON.stringify(data, null, 2),
        })
    }

    function onSettingsSubmit(data: z.infer<typeof settingsFormSchema>) {
        toast.success("Settings updated!", {
            description: "Your preferences have been saved.",
        })
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-white">Forms</h1>
                <p className="text-muted-foreground">Validated forms using React Hook Form and Zod.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <EndcoreCard title="Profile Information" status="active">
                    <Form {...profileForm}>
                        <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                            <FormField
                                control={profileForm.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={profileForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="m@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={profileForm.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a role" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="admin">Administrator</SelectItem>
                                                <SelectItem value="user">User</SelectItem>
                                                <SelectItem value="guest">Guest</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={profileForm.control}
                                name="bio"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bio</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us a little bit about yourself"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Update Profile</Button>
                        </form>
                    </Form>
                </EndcoreCard>

                <EndcoreCard title="Email Preferences" status="neutral">
                    <Form {...settingsForm}>
                        <form onSubmit={settingsForm.handleSubmit(onSettingsSubmit)} className="space-y-6">
                            <div className="space-y-4">
                                <FormField
                                    control={settingsForm.control}
                                    name="marketing_emails"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border border-white/10 p-4">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-base">
                                                    Marketing emails
                                                </FormLabel>
                                                <FormDescription>
                                                    Receive emails about new products, features, and more.
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={settingsForm.control}
                                    name="security_emails"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between rounded-lg border border-white/10 p-4">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-base">Security emails</FormLabel>
                                                <FormDescription>
                                                    Receive emails about your account security and authentication.
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    disabled
                                                    aria-readonly
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit">Save Preferences</Button>
                        </form>
                    </Form>
                </EndcoreCard>
            </div>
        </div>
    )
}
