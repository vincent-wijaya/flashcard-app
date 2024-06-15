import * as api from '$lib/api.js'
import { error, redirect } from '@sveltejs/kit'
import { supabase } from '$lib/supabaseClient.js'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { tableName } = params
    const { data, error } = await supabase.from(tableName).select('*')
    if (error) {
        throw new Error(error.message)
    }
    const words = data.map((row) => row.words)


    return { words }
}