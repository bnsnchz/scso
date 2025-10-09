<template>
    <div class="brian-stone-page">
        <SplitContent :content="brianStoneContent" :image="getAssetUrl('/images/brian-hs.jpg')" image-alt="Brian Stone"
            has-background />
        <div class="st-container cnt-stl">
            <p>"Stone is a passionate conductor. He eschews the baton, preferring to use his hands and, indeed, his
                whole body, to direct the players. He often appeared to be dancing ecstatically to the music, even as he
                was utterly focused on the players. They responded magnificently, giving this big, warm symphony (Dvorak
                #6) the treatment it deserves." Chico, (CA) News and Review</p>
            <p>"Conductor Brian Stone had everyone’s attention;" Boston Globe</p>
            <p>"The hero was conductor Brian Stone ...(who) galvanized the Boston Conservatory Orchestra and made
                musical sense of every bar." Boston Phoenix</p>
            <p>Prize-winning conductor and award-winning teacher Brian Stone has worked both in the opera pit and on the
                concert stage with professional orchestras in California, Missouri, Indiana, Utah, Maryland, Florida,
                Alaska, Washington, Kansas, Connecticut, Romania, Germany, Hungary and Bulgaria, and students at The
                University of Maryland, The Johns Hopkins University, Ohio University, Boston Conservatory, University
                of Mobile, San Diego State University, Stanford University, the National Conservatory of Colombia, The
                Claremont Colleges (CA), The Catholic University of America, and the All-State Honor Orchestras of
                Delaware, New Jersey, Pennsylvania, and Southern California, to both public and institutional acclaim.
            </p>
            <p>As a young conductor, Brian was chosen to conduct in the League of American Orchestras’ well- known elite
                Bruno Walter National Conductor Preview with the Utah Symphony, The Festival at Sandpoint’s Young
                Conductor Showcase with the Spokane Symphony and, was awarded the “Special Prize” at an international
                conducting competition in Romania. In 2008 he received the prestigious Jessie B. DuPont Award in Music
                Education in recognition of his work and in 2009 he was awarded the “First Honours Diploma” in the 29th
                Master Players Music Competition.</p>
            <p>In a decade as director of the University of Delaware Orchestras, Stone developed a three- ensemble area
                of orchestral activities that doubled the enrollment, tripled the number of performances, and quadrupled
                the audience. His sophisticated programs, ranging from Baroque to Contemporary, and the Classics to
                Jazz, Broadway and Hollywood received national recognition. In 2009 the UD Symphony was invited for the
                first time in their history to perform at the Music Educator’s National Conference convention.</p>
            <p>Brian began music playing saxophone in the public schools of Santa Monica, California. Already an
                exceptional player as a youth, he went on to win several competitions. Later, he took up viola and
                piano, and started composing as well. Stone is a graduate of Bennington College in Vermont, where he
                studied composition, viola, and literature.</p>
            <p>In a varied musical life, he has had the honor of working with many extraordinary and highly regarded
                musicians including: George Perle, Bethany Beardslee, Gilbert Kalish, Leon Fleisher, Karel Husa, Eddie
                Daniels, Walter Ducloux, Gerard Schwarz, Marvin Hamlisch, Leonard Slatkin, Piero Weiss, John
                Shirley-Quirk, and Ivan Fischer.</p>
            <p>Dr. Stone received a Master of Music degree and a Doctorate in conducting from the Peabody Conservatory
                where he studied with Frederik Prausnitz and Gustav Meier. Additional studies in conducting took place
                at Le Domaine Forget in Canada with Otto-Werner Mueller and two summers at the Festival at Sandpoint
                with Gunther Schuller. He also studied with Harvey Pittel on saxophone, Jacob Glick on viola, Bill Dixon
                in improvisation, and Allen Shawn and Henry Brant in composition.</p>
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
        name: 'BrianStonePage',
        components: {
            SplitContent,
            Newsletter
        },
        setup() {
            const {
                getAssetUrl
            } = useSiteConfig()
            const brianStoneContent = [
                '<h1>Brian Stone</h1>',
                '<p>Executive Director</p>',
            ]
            return {
                getAssetUrl,
                brianStoneContent
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