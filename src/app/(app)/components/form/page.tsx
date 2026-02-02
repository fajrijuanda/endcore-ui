"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { EndcoreCard } from "@/components/ui/EndcoreCard";
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
import { toast } from "sonner"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    code_name: z.string().min(5, {
        message: "Code name must be at least 5 characters.",
    }),
})

export default function FormPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            code_name: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        toast.success("MISSION_ACCEPTED", {
            description: "Data has been synced with HQ servers.",
        })
        console.log(values)
    }

    return (
        <div className="space-y-8 p-6">
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-1 bg-primary rounded-full" />
                    <h1 className="text-3xl font-black tracking-tight text-foreground uppercase">VALIDATED_SEQUENCES</h1>
                </div>
                <p className="text-muted-foreground font-medium">Complex form state management with tactical validation and industrial UX.</p>
            </div>

            <EndcoreCard title="Operative_Registration_Protocol" status="warning">
                <div className="p-10 max-w-xl mx-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[10px] font-black uppercase tracking-widest text-zinc-500">OPERATIVE_HANDLE</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shdw_pntr" {...field} className="rounded-xl bg-white/5 border-white/10" />
                                        </FormControl>
                                        <FormDescription className="text-[10px] font-mono italic">
                                            This is your public display name locally.
                                        </FormDescription>
                                        <FormMessage className="text-[10px] font-mono uppercase text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="code_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[10px] font-black uppercase tracking-widest text-zinc-500">ENCRYPTION_SALT_PHRASE</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ALPHA_OMEGA_99" {...field} className="rounded-xl bg-white/5 border-white/10" />
                                        </FormControl>
                                        <FormDescription className="text-[10px] font-mono italic">
                                            Required for secondary biometric verification.
                                        </FormDescription>
                                        <FormMessage className="text-[10px] font-mono uppercase text-red-500" />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full h-12 rounded-2xl font-black uppercase tracking-widest">INITIALIZE_PROFILE</Button>
                        </form>
                    </Form>
                </div>
            </EndcoreCard>
        </div>
    )
}
