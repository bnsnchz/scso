<template>
  <footer class="footer drk-bg">
    <div class="st-container-lg">
      <img src="/scso/images/scso-acronym-bgtransparent.png" alt="Santa Clarita Symphony Orchestra Logo" loading="eager">
      <div class="footer-social-links">
          <a href="https://www.facebook.com/SCSOrchestra" aria-label="Follow Santa Clarita Symphony Orchestra on Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
                <path
                    d="M14.3505 7.14152L13.9952 10.5536H11.3835V20.4436H7.453V10.5536H5.48901V7.14152H7.45465V5.08523C7.45465 2.31932 8.55574 0.663574 11.7032 0.663574H14.3233V4.06656H12.6856C11.4667 4.06656 11.3843 4.5487 11.3843 5.44044V7.14235L14.3505 7.14152Z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/scsorchestra/" aria-label="Follow Santa Clarita Symphony Orchestra on Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
              <path
                  d="M14.2604 20.3313H7.14866C5.47817 20.339 3.8728 19.6839 2.68456 18.5097C1.49633 17.3356 0.822199 15.7381 0.809998 14.0676L0.809998 7.03914C0.821112 5.36834 1.49489 3.77024 2.68337 2.59583C3.87184 1.42142 5.47784 0.766705 7.14866 0.775478H14.2522C15.923 0.766705 17.529 1.42142 18.7175 2.59583C19.9059 3.77024 20.5797 5.36834 20.5908 7.03914V14.0676C20.5804 15.7372 19.9079 17.3344 18.7211 18.5088C17.5343 19.6831 15.93 20.3385 14.2604 20.3313ZM10.7 5.09329C9.62365 5.10629 8.57518 5.43735 7.68653 6.0448C6.79788 6.65226 6.10874 7.50897 5.70582 8.50715C5.3029 9.50532 5.2042 10.6004 5.42214 11.6545C5.64008 12.7086 6.16492 13.6748 6.93063 14.4313C7.69633 15.1879 8.6687 15.7011 9.72538 15.9064C10.7821 16.1116 11.8758 15.9998 12.8691 15.5849C13.8624 15.17 14.7107 14.4707 15.3075 13.5748C15.9042 12.6789 16.2227 11.6265 16.2227 10.5501C16.2184 9.82916 16.0721 9.11614 15.7923 8.45174C15.5124 7.78734 15.1044 7.18458 14.5915 6.67786C14.0787 6.17115 13.4711 5.77041 12.8034 5.49853C12.1357 5.22665 11.4209 5.08894 10.7 5.09329ZM15.8733 4.69357C15.8733 4.89204 15.9521 5.08238 16.0925 5.22272C16.2328 5.36307 16.4232 5.44191 16.6216 5.44191C16.8201 5.44191 17.0105 5.36307 17.1508 5.22272C17.2911 5.08238 17.37 4.89204 17.37 4.69357C17.3699 4.49509 17.2909 4.30479 17.1505 4.16453C17.0101 4.02426 16.8197 3.94553 16.6212 3.94563C16.4228 3.94574 16.2324 4.02469 16.0922 4.16511C15.9519 4.30553 15.8732 4.49509 15.8733 4.69357ZM10.7 14.8407C9.85291 14.8324 9.02722 14.5736 8.32691 14.097C7.6266 13.6203 7.083 12.9471 6.76456 12.1621C6.44613 11.3771 6.3671 10.5154 6.53743 9.6856C6.70777 8.85577 7.11985 8.0949 7.72177 7.49881C8.32369 6.90273 9.08854 6.49808 9.91999 6.33584C10.7514 6.1736 11.6123 6.26102 12.3942 6.58709C13.176 6.91316 13.8439 7.4633 14.3137 8.16822C14.7835 8.87314 15.0343 9.70132 15.0343 10.5484C15.0282 11.6923 14.5683 12.787 13.7556 13.5919C12.9429 14.3969 11.8439 14.8455 10.7 14.8407Z" />
          </svg>
          </a>
        </div>
      <div class="lacac-callout">
        <img src="/scso/public/images/lacac.avif" alt="LACAC Logo" loading="eager">
        <p>This organization is supported, in part, by the Los Angeles County Board of Supervisors through the Department of Arts and Culture.</p>
      </div>
      <p class="footer-copyright">&copy; 2025 SCSO. All rights reserved.</p>
      <p class="footer-legal">Santa Clarita Symphony Orchestra is a Section 501(c)3 nonprofit (EIN: 88-4299007) and your gift may qualify as a charitable deduction for federal income tax purposes.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  padding: 64px 0;
  text-align: center;
  background-color: var(--color-black);
  color: #fff;
}

.footer img {
  width: 100%;
  max-width: 120px;
}

.lacac-callout {
  text-align: center;
  gap: 24px;
  max-width: 600px;
  margin: 24px auto;
}

.lacac-callout img {
  margin-bottom: 24px;
}

.footer-social-links {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 24px 0;
}

.footer-social-links svg {
  fill: var(--color-pistachio);
}

.footer-legal {
  font-size: 12px;
  line-height: 1.5;
  font-weight: 100;
  margin-top: 8px
}
</style>
