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
                    <li class="board-staff-item st-item st-flex st-half">
                       <div class="image-cont st-item">
                            <img src="/images/jr.avif" alt="J.R. Hills" />
                       </div> 
                       <div class="board-staff-content st-item">
                            <p class="title">President</p>
                            <h3>J.R. Hills</h3>
                            <a href="mailto:jr.hills@santaclaritasymphonyorchestra.org">jr.hills@santaclaritasymphonyorchestra.org</a>
                       </div>
                    </li>
                    <li class="board-staff-item st-item st-flex st-half">
                       <div class="image-cont st-item">
                            <img src="/images/bess.avif" alt="Bess Knight" />
                       </div> 
                       <div class="board-staff-content st-item">
                            <p class="title">Secretary</p>
                            <h3>Bess Knight</h3>
                            <a href="mailto:bess.knight@santaclaritasymphonyorchestra.org">bess.knight@santaclaritasymphonyorchestra.org</a>
                       </div>
                    </li>
                    <li class="board-staff-item st-item st-flex st-half">
                       <div class="image-cont st-item">
                            <img src="/images/cassie.avif" alt="Cassie Borish" />
                       </div> 
                       <div class="board-staff-content st-item">
                            <p class="title">Treasurer</p>
                            <h3>Cassie Borish</h3>
                            <a href="mailto:cassie.borish@santaclaritasymphonyorchestra.org">cassie.borish@santaclaritasymphonyorchestra.org</a>
                       </div>
                    </li>
                    <li class="board-staff-item st-item st-flex st-half">
                       <div class="image-cont st-item">
                            <img src="/images/susy.avif" alt="Susy Christansen" />
                       </div> 
                       <div class="board-staff-content st-item">
                            <p class="title">Marketing</p>
                            <h3>Susy Christansen</h3>
                            <a href="mailto:susy.christansen@santaclaritasymphonyorchestra.org">susy.christansen@santaclaritasymphonyorchestra.org</a>
                       </div>
                    </li>
                    <li class="board-staff-item st-item st-flex st-half">
                       <div class="image-cont st-item">
                            <img src="/images/ashley.avif" alt="Ashley Turner" />
                       </div> 
                       <div class="board-staff-content st-item">
                            <p class="title">Executive Director</p>
                            <h3>Ashley Turner</h3>
                            <a href="mailto:ashley.turner@santaclaritasymphonyorchestra.org">ashley.turner@santaclaritasymphonyorchestra.org</a>
                       </div>
                    </li>
                    <li class="board-staff-item st-item st-flex st-half">
                       <div class="image-cont st-item">
                            <img src="/images/patrick.jpg" alt="Patrick Karamian" />
                       </div> 
                       <div class="board-staff-content st-item">    
                            <p class="title">Administrative Coordinator</p>
                            <h3>Patrick Karamian</h3>
                       </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import PageHero from '@/components/PageHero.vue'
import { useSiteConfig } from '@/composables/useSiteConfig.js'

export default {
    name: 'BoardstaffPage',
    components: {
        PageHero
    },
    setup() {
        const { getAssetUrl } = useSiteConfig()
        
        return {
            getAssetUrl
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

.board-staff-list .board-staff-item {
    align-items: stretch;
    gap: 0;
    --var-item-width: calc(50% - 12px);
    flex: 1 1 calc(50% - 12px); /* Ensure equal flex distribution */
    min-width: 0; /* Prevent flex items from overflowing */
}

.image-cont {
    --_var-img-height: 272px;
}

.board-staff-content {
    background-color: var(--color-pistachio);
    padding: 48px 24px;
    flex: 1; /* Take remaining space */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 0; /* Prevent content overflow */
}

.board-staff-content a {
    color: var(--color-black);
    font-size: 10px;
    word-break: break-all; /* Handle long email addresses */
    overflow-wrap: break-word;
}

</style>