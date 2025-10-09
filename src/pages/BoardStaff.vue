<template>
    <div class="boardstaff-page">
        <PageHero
            title="SCSO Board & Staff"
            description="Our Board and Staff is composed of SCV musicians committed to supporting the arts in our community."
            :background-image="getAssetUrl('/images/board-hero.png')"
            background-image-alt="SCSO Board & Staff"
        />
        <div class="st-container board-staff-container">
            <div class="board-staff">
                <ul class="board-staff-list st-flex st-half">
                    <BoardStaffCard 
                        v-for="member in boardStaffMembers" 
                        :key="member.id"
                        :member="member"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import PageHero from '@/components/PageHero.vue'
import BoardStaffCard from '@/components/BoardStaffCard.vue'
import { useSiteConfig } from '@/composables/useSiteConfig.js'

export default {
    name: 'BoardstaffPage',
    components: {
        PageHero,
        BoardStaffCard
    },
    setup() {
        const { getAssetUrl } = useSiteConfig()
        
        // Board and Staff member data
        const boardStaffMembers = [
            {
                id: 'jr-hills',
                name: 'J.R. Hills',
                title: 'President',
                image: '/images/jr.avif',
                email: 'jr.hills@santaclaritasymphonyorchestra.org'
            },
            {
                id: 'bess-knight',
                name: 'Bess Knight',
                title: 'Secretary',
                image: '/images/bess.avif',
                email: 'bess.knight@santaclaritasymphonyorchestra.org'
            },
            {
                id: 'cassie-borish',
                name: 'Cassie Borish',
                title: 'Treasurer',
                image: '/images/cassie.avif',
                email: 'cassie.borish@santaclaritasymphonyorchestra.org'
            },
            {
                id: 'susy-christansen',
                name: 'Susy Christansen',
                title: 'Marketing',
                image: '/images/susy.avif',
                email: 'susy.christansen@santaclaritasymphonyorchestra.org'
            },
            {
                id: 'ashley-turner',
                name: 'Ashley Turner',
                title: 'Executive Director',
                image: '/images/ashley.avif',
                email: 'ashley.turner@santaclaritasymphonyorchestra.org'
            },
            {
                id: 'patrick-karamian',
                name: 'Patrick Karamian',
                title: 'Administrative Coordinator',
                image: '/images/patrick.jpg'
                // No email provided for Patrick
            }
        ]
        
        return {
            getAssetUrl,
            boardStaffMembers
        }
    }
}
</script>

<style scoped>
.board-staff-container {
    padding: 80px 0;
}

.board-staff-list {
    gap: 24px;
}

/* Mobile Responsive Styles */
@media screen and (max-width: 768px) {
    .board-staff-container {
        padding: 40px 0;
    }
    
    .board-staff-list {
        flex-direction: column;
        gap: 20px;
    }
}

@media screen and (max-width: 480px) {
    .board-staff-container {
        padding: 32px 0;
    }
}
</style>