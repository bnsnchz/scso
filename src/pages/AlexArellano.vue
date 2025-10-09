<template>
    <div class="alex-arellano-page">
        <SplitContent :content="alexArellanoContent" :image="getAssetUrl('/images/alex-hs.webp')" image-alt="Alex Arellano"
            has-background />
        <div class="st-container cnt-stl">
            <p>Martín Alexander Arellano is an award winning conductor and composer of Nicaraguan & Mexican descent, from California.. He is a triple laureate of the 2024 American Prize—winning in Opera Conducting, taking 2nd place in Community Orchestra Conducting, and 3rd place in Musical Theater Conducting—and in 2023, received the second jury prize at the Opéra de Baugé International Conducting Competition in France. Alex is the Conductor of the Santa Clarita Symphony and current Music Director of the North Bay Chamber Orchestra in Tampa, FL as well as the Central California Wind Ensemble based in Turlock, CA. He holds conducting degrees from the Strasbourg Conservatoire in France and the University of Iowa in the US. </p>
            <p>Alex began studying conducting with Stuart Sims at the California State University: Stanislaus and since has worked with Robert Carnochan and Stephen Moore at the University of Miami’s Frost School of Music. In 2021, Alex received his COP (Cycle d’Orientation Professional) in Orchestral Direction while studying with and Music Director Emeritus of the Strasbourg Philharmonic Theodor Guschlbauer at the Strasbourg Conservatoire, where he was selected to represent the conducting studio in a masterclass with David Reiland the Orchestre National de Metz. </p>
            <p>Alex conducted at the Pierre Monteux Festival in 2025 & 2024 where he worked with conductors Tiffany Lu (University of Florida) and Chung Park (St. Olaf College). In 2022, he was invited to serve as a Conducting Fellow for the Allentown Symphony and Artistic Director Diane Wittry. He has attended conducting workshops with the Järvi Family (Pärnu Music Festival), David Hill (The Bach Choir), David Reiland (Orchestre National de Metz), Paul Vermel (Emeritus, Northwest Symphony Orchestra), Neil Thomson (Philharmonic Orchestra of Goiás), Peter Jaffe (Stockton Symphony), and Diane Wittry (Allentown Symphony Orchestra). Alex was also a Conducting Fellow with the Miami Symphony Orchestra with Maestro Eduardo Marturet in the 2016 - 2017 season. </p>
            <p>As a composer, Alex has written compositions for wind ensemble, symphony orchestra, and various chamber ensembles. He was a finalist in 2019 in the Florida Orchestra’s Student Composer Competition with his work Fantasia on a Song for a Child. Alex has worked with composers including Steven Bryant, Christopher Theofanidis, Victoria Bond, and Avner Dorman. He graduated with his Bachelors Diploma in Music Theory and Composition at the University of Miami's Frost School of Music where he studied with Charles Norman Mason. From 2018 - 2019, Alex served as Assistant Conductor to Shawn Crouch, director of the Frost School of Music’s premier new music ensemble “Ensemble Ibis”. </p>
            <p>Alex is an alumnus of the Beta Tau chapter of Phi Mu Alpha Sinfonia at the University of Miami. Alex is a BMI associated composer. </p>
        </div>
    </div>
    <Newsletter />
</template>

<script>
    import {
        useSiteConfig
    } from '@/composables/useSiteConfig.js'
    import SplitContent from '@/components/SplitContent.vue'
    import Newsletter from '@/components/Newsletter.vue'
    export default {
        name: 'AlexArellanoPage',
        components: {
            SplitContent,
            Newsletter
        },
        setup() {
            const {
                getAssetUrl
            } = useSiteConfig()
            const alexArellanoContent = [
                '<h1>Alex Arellano</h1>',
                '<p>Conductor</p>',
            ]
            return {
                getAssetUrl,
                alexArellanoContent
            }
        }
    }
</script>

<style scoped>
    :deep(.content-details) {
        flex-direction: row-reverse;
    }

    :deep(.content-text) {
        text-align: center;
    }

    :deep(.content-text h1) {
        color: #fff;
        font-size: 64px;
        font-weight: 600;
    }

    :deep(.content-text p) {
        font-size: 20px;
    }

    .st-container.cnt-stl {
        padding: 64px 0;
    }
</style>